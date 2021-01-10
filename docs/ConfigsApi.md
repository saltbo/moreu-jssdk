# MoreuJssdk.ConfigsApi

All URIs are relative to *//localhost:8081/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configsKeyDelete**](ConfigsApi.md#configsKeyDelete) | **DELETE** /configs/{key} | 删除配置项
[**configsKeyGet**](ConfigsApi.md#configsKeyGet) | **GET** /configs/{key} | 获取配置项
[**configsKeyPut**](ConfigsApi.md#configsKeyPut) | **PUT** /configs/{key} | 修改配置项

<a name="configsKeyDelete"></a>
# **configsKeyDelete**
> HttputilJSONResponse configsKeyDelete(key)

删除配置项

根据键名删除配置项

### Example
```javascript
import MoreuJssdk from 'moreu-jssdk';

let apiInstance = new MoreuJssdk.ConfigsApi();
let key = "key_example"; // String | 键名

apiInstance.configsKeyDelete(key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| 键名 | 

### Return type

[**HttputilJSONResponse**](HttputilJSONResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="configsKeyGet"></a>
# **configsKeyGet**
> HttputilJSONResponse configsKeyGet(key)

获取配置项

根据键名获取配置项

### Example
```javascript
import MoreuJssdk from 'moreu-jssdk';

let apiInstance = new MoreuJssdk.ConfigsApi();
let key = "key_example"; // String | 键名

apiInstance.configsKeyGet(key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| 键名 | 

### Return type

[**HttputilJSONResponse**](HttputilJSONResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="configsKeyPut"></a>
# **configsKeyPut**
> HttputilJSONResponse configsKeyPut(bodykey)

修改配置项

根据键名修改配置项

### Example
```javascript
import MoreuJssdk from 'moreu-jssdk';

let apiInstance = new MoreuJssdk.ConfigsApi();
let body = null; // Object | 参数
let key = "key_example"; // String | 键名

apiInstance.configsKeyPut(bodykey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| 参数 | 
 **key** | **String**| 键名 | 

### Return type

[**HttputilJSONResponse**](HttputilJSONResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

