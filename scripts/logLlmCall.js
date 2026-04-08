const fs = require('fs');
const path = require('path');

// Usage: node scripts/logLlmCall.js '{"model":"gpt-5-mini","tokens":1234,"purpose":"generate-component","spec":"specs/002-feature-label-color/spec.md"}'
async function main(){
  const arg = process.argv[2];
  if(!arg){
    console.error('Pass a JSON string as first argument');
    process.exit(1);
  }
  let entry;
  try{ entry = JSON.parse(arg); }catch(e){ console.error('Invalid JSON'); process.exit(1); }
  entry.timestamp = new Date().toISOString();
  const dir = path.join('.github','memory-bank');
  try{ await fs.promises.mkdir(dir,{recursive:true}); }catch{}
  const file = path.join(dir,'llm-usage.log');
  await fs.promises.appendFile(file, JSON.stringify(entry) + '\n', 'utf8');
  console.log('Logged LLM call');
}

main().catch(e=>{ console.error(e); process.exit(1); });
