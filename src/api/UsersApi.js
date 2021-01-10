/**
 * Moreu API
 * This is a moreu server.
 *
 * OpenAPI spec version: 1.0
 * Contact: saltbo@foxmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import BindBodyUser from '../model/BindBodyUser';
import BindBodyUserPatch from '../model/BindBodyUserPatch';
import HttputilJSONResponse from '../model/HttputilJSONResponse';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';

/**
* Users service.
* @module api/UsersApi
* @version 1.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the userGet operation.
     * @callback module:api/UsersApi~userGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 当前登录用户信息
     * 获取已登录用户的详细信息
     * @param {module:api/UsersApi~userGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    userGet(username, callback) {
      let postBody = null;

      let pathParams = {
        'username': username
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the usersEmailPatch operation.
     * @callback module:api/UsersApi~usersEmailPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HttputilJSONResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 更新一项用户信息
     * 用于账户激活和密码重置
     * @param {module:api/UsersApi~usersEmailPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HttputilJSONResponse}
     */
    usersEmailPatch(body, email, callback) {
      let postBody = body;

      let pathParams = {
        'email': email
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = HttputilJSONResponse;

      return this.apiClient.callApi(
        '/users/{email}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the usersGet operation.
     * @callback module:api/UsersApi~usersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 用户列表
     * 获取用户列表信息
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~usersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    usersGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'email': opts['email'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the usersPost operation.
     * @callback module:api/UsersApi~usersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 用户注册
     * 注册一个用户
     * @param {module:api/UsersApi~usersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    usersPost(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the usersUsernameGet operation.
     * @callback module:api/UsersApi~usersUsernameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 用户查询
     * 获取一个用户的公开信息
     * @param {module:api/UsersApi~usersUsernameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    usersUsernameGet(username, callback) {
      let postBody = null;

      let pathParams = {
        'username': username
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/users/{username}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the usersUsernamePut operation.
     * @callback module:api/UsersApi~usersUsernamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HttputilJSONResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 修改个人信息
     * 更新用户的个人信息
     * @param {module:api/UsersApi~usersUsernamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HttputilJSONResponse}
     */
    usersUsernamePut(username, callback) {
      let postBody = null;

      let pathParams = {
        'username': username
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HttputilJSONResponse;

      return this.apiClient.callApi(
        '/users/{username}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}