// Octokit.js
// https://github.com/octokit/core.js#readme

var userauth = prompt("请输入Github令牌","ghp_……");
window.alert(userauth);

import {
  Octokit,
  App
} from "https://cdn.skypack.dev/octokit";

const octokit = new Octokit({
  auth: userauth
});

await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
  owner: 'raziore',
  repo: 'churl',
  path: 'demo/message.txt',
  message: 'start a new conversation',
  committer: {
    name: 'MYNAME',
    email: 'email@exameple.com'
  },
  content: 'Y29udGVudA=='
});
