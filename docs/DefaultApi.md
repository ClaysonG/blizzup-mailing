# MailingApi.DefaultApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTemplate**](DefaultApi.md#createTemplate) | **POST** /template | 
[**deleteTemplate**](DefaultApi.md#deleteTemplate) | **DELETE** /template/{id} | 
[**queryTemplates**](DefaultApi.md#queryTemplates) | **GET** /template | Your GET endpoint
[**sendMail**](DefaultApi.md#sendMail) | **POST** /templates/send | 
[**updateTemplate**](DefaultApi.md#updateTemplate) | **PATCH** /template/{id} | 



## createTemplate

> TemplateResponse createTemplate(opts)



Endpoint used to create a query.

### Example

```javascript
import MailingApi from 'mailing_api';

let apiInstance = new MailingApi.DefaultApi();
let opts = {
  'templateRequest': new MailingApi.TemplateRequest() // TemplateRequest | 
};
apiInstance.createTemplate(opts, (error, data, response) => {
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
 **templateRequest** | [**TemplateRequest**](TemplateRequest.md)|  | [optional] 

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTemplate

> TemplateResponse deleteTemplate(id)





### Example

```javascript
import MailingApi from 'mailing_api';

let apiInstance = new MailingApi.DefaultApi();
let id = "id_example"; // String | Id of the template
apiInstance.deleteTemplate(id, (error, data, response) => {
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
 **id** | **String**| Id of the template | 

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryTemplates

> QueryMailTemplateResponse queryTemplates(opts)

Your GET endpoint

Endpoint used to query the template.

### Example

```javascript
import MailingApi from 'mailing_api';

let apiInstance = new MailingApi.DefaultApi();
let opts = {
  'filterId': "filterId_example" // String | Filters by ids. Example filter[ids]=1,2,3
};
apiInstance.queryTemplates(opts, (error, data, response) => {
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
 **filterId** | **String**| Filters by ids. Example filter[ids]&#x3D;1,2,3 | [optional] 

### Return type

[**QueryMailTemplateResponse**](QueryMailTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendMail

> ApiResponse sendMail(opts)



Endpoint used to send mail.

### Example

```javascript
import MailingApi from 'mailing_api';

let apiInstance = new MailingApi.DefaultApi();
let opts = {
  'sendMailRequest': new MailingApi.SendMailRequest() // SendMailRequest | 
};
apiInstance.sendMail(opts, (error, data, response) => {
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
 **sendMailRequest** | [**SendMailRequest**](SendMailRequest.md)|  | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTemplate

> TemplateResponse updateTemplate(id, opts)



### Example

```javascript
import MailingApi from 'mailing_api';

let apiInstance = new MailingApi.DefaultApi();
let id = "id_example"; // String | Id of the template
let opts = {
  'templateRequest': new MailingApi.TemplateRequest() // TemplateRequest | 
};
apiInstance.updateTemplate(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the template | 
 **templateRequest** | [**TemplateRequest**](TemplateRequest.md)|  | [optional] 

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

