const fs = require('fs').promises;
const path = require('path');

async function run(){
  const slug = process.argv[2];
  const jira = process.argv[3] || '';
  if(!slug){ console.error('Usage: node scripts/createSpec.js <slug> [JIRA]'); process.exit(1); }
  const root = await detectSpecsRoot();
  await ensureDir(path.join(root,'templates'));
  const next = await nextNumber(root);
  const name = `${String(next).padStart(3,'0')}-${slug}`;
  const dest = path.join(root,name);
  await fs.mkdir(dest,{recursive:true});

  const templatePath = path.join(root,'templates','spec.md');
  let content;
  try{ content = await fs.readFile(templatePath,'utf8'); }
  catch{ content = defaultSpecTemplate(); }
  content = content.replace(/{{JIRA}}/g,jira).replace(/{{STATUS}}/g,'Draft').replace(/{{TITLE}}/g,slug.replace(/-/g,' '));
  await fs.writeFile(path.join(dest,'spec.md'),content,'utf8');
  await fs.writeFile(path.join(dest,'plan.md'),fsExists(path.join(root,'templates','plan.md')).then(()=>fs.readFile(path.join(root,'templates','plan.md'))).catch(()=>'').then(d=>d),'utf8');
  await fs.writeFile(path.join(dest,'tasks.md'),fsExists(path.join(root,'templates','tasks.md')).then(()=>fs.readFile(path.join(root,'templates','tasks.md'))).catch(()=>defaultTasks()),'utf8');
  await fs.writeFile(path.join(dest,'pr-spec.md'),'','utf8');
  await fs.writeFile(path.join(dest,'test-report.md'),'','utf8');

  await updateActiveContext(`Created spec ${name} ${jira ? '('+jira+')' : ''}`);
  console.log('Created', dest);
}

async function detectSpecsRoot(){
  const candidates = ['.github/specs','specs','.github/specs/active'];
  for(const c of candidates){
    try{ await fs.access(c); return c; }catch{}
  }
  await fs.mkdir('.github/specs', {recursive:true});
  return '.github/specs';
}

async function nextNumber(root){
  const entries = await fs.readdir(root,{withFileTypes:true});
  const nums = entries
    .filter(d=>d.isDirectory())
    .map(d=>{ const m = d.name.match(/^(\d{3})-/); return m?parseInt(m[1],10):null; })
    .filter(n=>n!=null);
  return nums.length?Math.max(...nums)+1:1;
}

function defaultSpecTemplate(){ return `**Status:** {{STATUS}}\n**Title:** {{TITLE}}\n**JIRA:** {{JIRA}}\n\n## Goal\n\nDescribe the outcome and why it matters.\n\n## Acceptance Criteria\n\n- GIVEN\n- WHEN\n- THEN\n`; }

async function ensureDir(p){ try{ await fs.mkdir(p,{recursive:true}); }catch{} }

async function updateActiveContext(line){
  const mb = '.github/memory-bank';
  await fs.mkdir(mb,{recursive:true});
  const file = path.join(mb,'activeContext.md');
  const now = new Date().toISOString();
  const entry = `- ${now} - ${line}\n`;
  try{ await fs.appendFile(file,entry,'utf8'); }catch{ await fs.writeFile(file,entry,'utf8'); }
}

async function fsExists(p){ try{ await fs.access(p); return true; }catch{return false;} }

function defaultTasks(){ return ['- [ ] Create spec.md','- [ ] Create plan.md','- [ ] Implement feature code','- [ ] Add tests','- [ ] Create pr-spec.md','- [ ] Produce test-report.md'].join('\n'); }

run().catch(e=>{ console.error(e); process.exit(1); });
