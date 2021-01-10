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

import ApiClient from '../ApiClient';

/**
* The ModelUserFormats model module.
* @module model/ModelUserFormats
* @version 1.0
*/
export default class ModelUserFormats {
    /**
    * Constructs a new <code>ModelUserFormats</code>.
    * @alias module:model/ModelUserFormats
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ModelUserFormats</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ModelUserFormats} obj Optional instance to populate.
    * @return {module:model/ModelUserFormats} The populated <code>ModelUserFormats</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelUserFormats();
                        
            
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('bio')) {
                obj['bio'] = ApiClient.convertToType(data['bio'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('nickname')) {
                obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('ux')) {
                obj['ux'] = ApiClient.convertToType(data['ux'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} avatar
    */
    'avatar' = undefined;
    /**
    * @member {String} bio
    */
    'bio' = undefined;
    /**
    * @member {String} company
    */
    'company' = undefined;
    /**
    * @member {String} created
    */
    'created' = undefined;
    /**
    * @member {String} email
    */
    'email' = undefined;
    /**
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * @member {String} location
    */
    'location' = undefined;
    /**
    * @member {String} nickname
    */
    'nickname' = undefined;
    /**
    * @member {String} role
    */
    'role' = undefined;
    /**
    * @member {String} status
    */
    'status' = undefined;
    /**
    * @member {String} updated
    */
    'updated' = undefined;
    /**
    * @member {String} url
    */
    'url' = undefined;
    /**
    * @member {String} username
    */
    'username' = undefined;
    /**
    * @member {String} ux
    */
    'ux' = undefined;




}