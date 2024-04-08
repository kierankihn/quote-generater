# Quote Generator / 名人名言生成器

*Made By Kieran Kihn*

## 这个项目是干什么的

这个项目使用了 Google Gemini 来生成名人名言，具有轻量，美观，快速的特点

## 开始使用

[在线 demo](https://demo.kierankihn.com)

在开始之前你首先需要一个来自 Google Gemini 的 API 密钥

如果你没有的话，可以去 Google AI Studio 申请一个免费的 API 密钥

首次向 AI 发送消息时，会要求你填入 API 密钥，从 Google AI Studio 复制过来填入即可

注意：API 密钥不要泄露给其他人

现在，你可以直接向 AI 发送一个人名或是一个主题，AI 就会生成一个对应的名言给你

Enjoy it!

## 部署

你可以选择直接使用生成好的发行版，拥有一个服务器 & nginx 即可极速部署，也可以选择自行从源码构建

### 直接使用发行版

你需要在 Github 的 Release 页面中下载对应的压缩包，拷贝至服务器之后，编写一份 nginx 配置即可愉快使用

### 自行构建

1. 克隆项目

```
$ git clone https://github.com/kierankihn/quote-generater
```

2. 安装依赖

```
$ npm i
```

3. 使用 npm 构建

```
$ npm run build
```

4. 此时构建出的文件会在 dist 文件夹之下放着，拷贝至服务器并部署即可

## 开发

本项目的技术栈使用 React + Typescript，使用了 ChatUI 作为基本的聊天框架，Google Generative AI SDK 作为与 Gemini 交流的工具

发现任何问题欢迎提出 issue & pull request

## 致谢

本项目使用了以下项目

- [Alibaba/ChatUI](https://github.com/alibaba/ChatUI)
- [Google/generative-ai-js](https://github.com/google/generative-ai-js)