# MoreuApi.TokensApi

All URIs are relative to *//localhost:8081/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokensDelete**](TokensApi.md#tokensDelete) | **DELETE** /tokens | 退出登录
[**tokensPost**](TokensApi.md#tokensPost) | **POST** /tokens | 登录/密码重置

<a name="tokensDelete"></a>
# **tokensDelete**
> HttputilJSONResponse tokensDelete()

退出登录

用户状态登出

### Example
```javascript
import MoreuApi from 'moreu_api';

let apiInstance = new MoreuApi.TokensApi();
apiInstance.tokensDelete((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HttputilJSONResponse**](HttputilJSONResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tokensPost"></a>
# **tokensPost**
> HttputilJSONResponse tokensPost(body)

登录/密码重置

用于账户登录和申请密码重置

### Example
```javascript
import MoreuApi from 'moreu_api';

let apiInstance = new MoreuApi.TokensApi();
let body = new MoreuApi.BindBodyToken(); // BindBodyToken | 参数

apiInstance.tokensPost(body, (error, data, response) => {
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
 **body** | [**BindBodyToken**](BindBodyToken.md)| 参数 | 

### Return type

[**HttputilJSONResponse**](HttputilJSONResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
