/**
 * Mailing API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ApiError from './model/ApiError';
import ApiResponse from './model/ApiResponse';
import Error from './model/Error';
import MailTemplate from './model/MailTemplate';
import QueryMailTemplateResponse from './model/QueryMailTemplateResponse';
import SendMailRequest from './model/SendMailRequest';
import TemplateRequest from './model/TemplateRequest';
import TemplateResponse from './model/TemplateResponse';
import DefaultApi from './api/DefaultApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MailingApi = require('index'); // See note below*.
* var xxxSvc = new MailingApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MailingApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MailingApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MailingApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ApiError model constructor.
     * @property {module:model/ApiError}
     */
    ApiError,

    /**
     * The ApiResponse model constructor.
     * @property {module:model/ApiResponse}
     */
    ApiResponse,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The MailTemplate model constructor.
     * @property {module:model/MailTemplate}
     */
    MailTemplate,

    /**
     * The QueryMailTemplateResponse model constructor.
     * @property {module:model/QueryMailTemplateResponse}
     */
    QueryMailTemplateResponse,

    /**
     * The SendMailRequest model constructor.
     * @property {module:model/SendMailRequest}
     */
    SendMailRequest,

    /**
     * The TemplateRequest model constructor.
     * @property {module:model/TemplateRequest}
     */
    TemplateRequest,

    /**
     * The TemplateResponse model constructor.
     * @property {module:model/TemplateResponse}
     */
    TemplateResponse,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
