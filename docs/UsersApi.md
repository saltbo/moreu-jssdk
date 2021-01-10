# MoreuApi.UsersApi

All URIs are relative to *//localhost:8081/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userGet**](UsersApi.md#userGet) | **GET** /user | 当前登录用户信息
[**usersEmailPatch**](UsersApi.md#usersEmailPatch) | **PATCH** /users/{email} | 更新一项用户信息
[**usersGet**](UsersApi.md#usersGet) | **GET** /users | 用户列表
[**usersPost**](UsersApi.md#usersPost) | **POST** /users | 用户注册
[**usersUsernameGet**](UsersApi.md#usersUsernameGet) | **GET** /users/{username} | 用户查询
[**usersUsernamePut**](UsersApi.md#usersUsernamePut) | **PUT** /users/{username} | 修改个人信息

<a name="userGet"></a>
# **userGet**
> InlineResponse200 userGet(username)

当前登录用户信息

获取已登录用户的详细信息

### Example
```javascript
import MoreuApi from 'moreu_api';

let apiInstance = new MoreuApi.UsersApi();
let username = "username_example"; // String | 用户名

apiInstance.userGet(username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| 用户名 | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersEmailPatch"></a>
# **usersEmailPatch**
> HttputilJSONResponse usersEmailPatch(bodyemail)

更新一项用户信息

用于账户激活和密码重置

### Example
```javascript
import MoreuApi from 'moreu_api';

let apiInstance = new MoreuApi.UsersApi();
let body = new MoreuApi.BindBodyUserPatch(); // BindBodyUserPatch | 参数
let email = "email_example"; // String | 邮箱

apiInstance.usersEmailPatch(bodyemail, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BindBodyUserPatch**](BindBodyUserPatch.md)| 参数 | 
 **email** | **String**| 邮箱 | 

### Return type

[**HttputilJSONResponse**](HttputilJSONResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersGet"></a>
# **usersGet**
> InlineResponse2001 usersGet(opts)

用户列表

获取用户列表信息

### Example
```javascript
import MoreuApi from 'moreu_api';

let apiInstance = new MoreuApi.UsersApi();
let opts = { 
  'email': "email_example", // String | 
  'limit': 56, // Number | 
  'offset': 56 // Number | 
};
apiInstance.usersGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersPost"></a>
# **usersPost**
> InlineResponse2002 usersPost(body)

用户注册

注册一个用户

### Example
```javascript
import MoreuApi from 'moreu_api';

let apiInstance = new MoreuApi.UsersApi();
let body = new MoreuApi.BindBodyUser(); // BindBodyUser | 参数

apiInstance.usersPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BindBodyUser**](BindBodyUser.md)| 参数 | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersUsernameGet"></a>
# **usersUsernameGet**
> InlineResponse200 usersUsernameGet(username)

用户查询

获取一个用户的公开信息

### Example
```javascript
import MoreuApi from 'moreu_api';

let apiInstance = new MoreuApi.UsersApi();
let username = "username_example"; // String | 用户名

apiInstance.usersUsernameGet(username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| 用户名 | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUsernamePut"></a>
# **usersUsernamePut**
> HttputilJSONResponse usersUsernamePut(username)

修改个人信息

更新用户的个人信息

### Example
```javascript
import MoreuApi from 'moreu_api';

let apiInstance = new MoreuApi.UsersApi();
let username = "username_example"; // String | 用户名

apiInstance.usersUsernamePut(username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| 用户名 | 

### Return type

[**HttputilJSONResponse**](HttputilJSONResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

