import {Octokit,App} from 'https://churl.netlify.app/chat.html';
const userauth = prompt("请输入Github令牌","ghp_");
const userowner = prompt("请输入Github账号名称","owner");
const username = prompt("请输入昵称","name");

const octokit = new Octokit({
  auth: userauth
});

const churlissues = await octokit.request('GET /repos/{owner}/{repo}/issues{?assignee,creator,sort,direction,since,per_page,page}', {
  owner: userowner,
  repo: 'churlmessage'
});
console.log(churlissues);

/*await octokit.request('POST /user/repos', {
  name: 'churlmessage',
  description: 'Your private churl message repo.',
  'private': true,
  is_template: false
})

await octokit.request('POST /repos/{owner}/{repo}/issues', {
  owner: userowner,
  repo: 'churlmessage',
  title: 'TITLE',
  body: 'BODY'
})*/
