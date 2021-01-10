# moreu_api

MoreuApi - JavaScript client for moreu_api
This is a moreu server.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0
- Package version: 1.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen
For more information, please visit [https://saltbo.cn](https://saltbo.cn)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install moreu_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MoreuApi = require('moreu_api');

var api = new MoreuApi.ConfigsApi()
var key = "key_example"; // {String} 键名

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.configsKeyDelete(key, callback);
```

## Documentation for API Endpoints

All URIs are relative to *//localhost:8081/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MoreuApi.ConfigsApi* | [**configsKeyDelete**](docs/ConfigsApi.md#configsKeyDelete) | **DELETE** /configs/{key} | 删除配置项
*MoreuApi.ConfigsApi* | [**configsKeyGet**](docs/ConfigsApi.md#configsKeyGet) | **GET** /configs/{key} | 获取配置项
*MoreuApi.ConfigsApi* | [**configsKeyPut**](docs/ConfigsApi.md#configsKeyPut) | **PUT** /configs/{key} | 修改配置项
*MoreuApi.TokensApi* | [**tokensDelete**](docs/TokensApi.md#tokensDelete) | **DELETE** /tokens | 退出登录
*MoreuApi.TokensApi* | [**tokensPost**](docs/TokensApi.md#tokensPost) | **POST** /tokens | 登录/密码重置
*MoreuApi.UsersApi* | [**userGet**](docs/UsersApi.md#userGet) | **GET** /user | 当前登录用户信息
*MoreuApi.UsersApi* | [**usersEmailPatch**](docs/UsersApi.md#usersEmailPatch) | **PATCH** /users/{email} | 更新一项用户信息
*MoreuApi.UsersApi* | [**usersGet**](docs/UsersApi.md#usersGet) | **GET** /users | 用户列表
*MoreuApi.UsersApi* | [**usersPost**](docs/UsersApi.md#usersPost) | **POST** /users | 用户注册
*MoreuApi.UsersApi* | [**usersUsernameGet**](docs/UsersApi.md#usersUsernameGet) | **GET** /users/{username} | 用户查询
*MoreuApi.UsersApi* | [**usersUsernamePut**](docs/UsersApi.md#usersUsernamePut) | **PUT** /users/{username} | 修改个人信息

## Documentation for Models

 - [MoreuApi.AllOfinlineResponse2001Data](docs/AllOfinlineResponse2001Data.md)
 - [MoreuApi.BindBodyToken](docs/BindBodyToken.md)
 - [MoreuApi.BindBodyUser](docs/BindBodyUser.md)
 - [MoreuApi.BindBodyUserPatch](docs/BindBodyUserPatch.md)
 - [MoreuApi.BindQueryUser](docs/BindQueryUser.md)
 - [MoreuApi.GinH](docs/GinH.md)
 - [MoreuApi.HttputilJSONResponse](docs/HttputilJSONResponse.md)
 - [MoreuApi.InlineResponse200](docs/InlineResponse200.md)
 - [MoreuApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [MoreuApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [MoreuApi.ModelUser](docs/ModelUser.md)
 - [MoreuApi.ModelUserFormats](docs/ModelUserFormats.md)
 - [MoreuApi.ModelUserProfile](docs/ModelUserProfile.md)

## Documentation for Authorization

 All endpoints do not require authorization.

