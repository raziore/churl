import {
  Octokit,
  App
} from "https://cdn.skypack.dev/octokit";
// Octokit.js
// https://github.com/octokit/core.js#readme

import {
  Octokit
} from "octokit";

const octokit = new Octokit({
  auth: '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'
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