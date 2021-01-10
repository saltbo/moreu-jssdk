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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MoreuApi);
  }
}(this, function(expect, MoreuApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MoreuApi.ModelUserProfile();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ModelUserProfile', function() {
    it('should create an instance of ModelUserProfile', function() {
      // uncomment below and update the code to test ModelUserProfile
      //var instane = new MoreuApi.ModelUserProfile();
      //expect(instance).to.be.a(MoreuApi.ModelUserProfile);
    });

    it('should have the property avatar (base name: "avatar")', function() {
      // uncomment below and update the code to test the property avatar
      //var instane = new MoreuApi.ModelUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property bio (base name: "bio")', function() {
      // uncomment below and update the code to test the property bio
      //var instane = new MoreuApi.ModelUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new MoreuApi.ModelUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new MoreuApi.ModelUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new MoreuApi.ModelUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new MoreuApi.ModelUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property nickname (base name: "nickname")', function() {
      // uncomment below and update the code to test the property nickname
      //var instane = new MoreuApi.ModelUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instane = new MoreuApi.ModelUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new MoreuApi.ModelUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property ux (base name: "ux")', function() {
      // uncomment below and update the code to test the property ux
      //var instane = new MoreuApi.ModelUserProfile();
      //expect(instance).to.be();
    });

  });

}));