# [churl](https://churl.netlify.app/)

# 简介

大致思路：使用Octokit.js，通过Personal Access Token与Github API（REST API及GraphQL API）进行交互，将聊天记录存储到Github私人仓库，再从客户端轮询以获取最新数据。

#### 目前存在的问题：

1.由于托管平台将静态资源单独存放在一个域名下，致使引用JS模型（或其中的库）会出现跨域限制，所以暂将JS放在body末尾。可能导致HTML文件过于臃肿。

2.Github API貌似不返回私人仓库文件的内容，即使经过私人令牌的身份验证，所以我不得不考虑使用Discussions（GraphQL API）或Issues（REST API）替代。这似乎并不合理。

3.Github API仅支持最多每分钟30次的请求。这意味着数据的实时性较差。我正在寻找一种更好的方法来代替短轮询。

4.我并没有稳定充裕的时间来开发，现在看到这个库的朋友可能要久等了。

# 使用说明

等项目做完了再写吧🦄
