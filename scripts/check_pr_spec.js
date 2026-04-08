const fs = require('fs');
const path = require('path');

function main(){
  const eventPath = process.env.GITHUB_EVENT_PATH || process.argv[2];
  if(!eventPath){
    console.error('GITHUB_EVENT_PATH not set. Pass path to event JSON as first arg.');
    process.exit(1);
  }
  const event = JSON.parse(fs.readFileSync(eventPath,'utf8'));
  const pr = event.pull_request || event; // allow passing the PR object directly
  const body = (pr && pr.body) ? pr.body : '';
  const title = (pr && pr.title) ? pr.title : '';

  const hasSpec = /specs\//i.test(body) || /specs\//i.test(title);
  const hasJira = /[A-Z]{2,}-\d+/.test(body) || /[A-Z]{2,}-\d+/.test(title);

  if(!hasSpec){
    console.error('PR check failed: PR body/title does not reference a spec under `specs/`');
    process.exit(1);
  }
  if(!hasJira){
    console.error('PR check warning: PR body/title does not include a JIRA key like PROJ-123');
    // don't fail on missing JIRA — just warn
  }
  console.log('PR check passed: spec referenced.');
}

main();
