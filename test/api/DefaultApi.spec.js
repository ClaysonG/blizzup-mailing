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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MailingApi);
  }
}(this, function(expect, MailingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MailingApi.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('createTemplate', function() {
      it('should call createTemplate successfully', function(done) {
        //uncomment below and update the code to test createTemplate
        //instance.createTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTemplate', function() {
      it('should call deleteTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteTemplate
        //instance.deleteTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('queryTemplates', function() {
      it('should call queryTemplates successfully', function(done) {
        //uncomment below and update the code to test queryTemplates
        //instance.queryTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendMail', function() {
      it('should call sendMail successfully', function(done) {
        //uncomment below and update the code to test sendMail
        //instance.sendMail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTemplate', function() {
      it('should call updateTemplate successfully', function(done) {
        //uncomment below and update the code to test updateTemplate
        //instance.updateTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
