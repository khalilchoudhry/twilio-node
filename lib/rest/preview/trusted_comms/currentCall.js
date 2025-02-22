'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var CurrentCallList;
var CurrentCallPage;
var CurrentCallInstance;
var CurrentCallContext;

/* jshint ignore:start */
/**
 * Initialize the CurrentCallList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.CurrentCallList
 *
 * @param {Twilio.Preview.TrustedComms} version - Version of the resource
 */
/* jshint ignore:end */
CurrentCallList = function CurrentCallList(version) {
  /* jshint ignore:start */
  /**
   * @function currentCalls
   * @memberof Twilio.Preview.TrustedComms#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.TrustedComms.CurrentCallContext}
   */
  /* jshint ignore:end */
  function CurrentCallListInstance(sid) {
    return CurrentCallListInstance.get(sid);
  }

  CurrentCallListInstance._version = version;
  // Path Solution
  CurrentCallListInstance._solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a current_call
   *
   * @function get
   * @memberof Twilio.Preview.TrustedComms.CurrentCallList#
   *
   * @returns {Twilio.Preview.TrustedComms.CurrentCallContext}
   */
  /* jshint ignore:end */
  CurrentCallListInstance.get = function get() {
    return new CurrentCallContext(this._version);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Preview.TrustedComms.CurrentCallList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  CurrentCallListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  CurrentCallListInstance[util.inspect.custom] = function inspect(depth, options)
      {
    return util.inspect(this.toJSON(), options);
  };

  return CurrentCallListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the CurrentCallPage
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.CurrentCallPage
 *
 * @param {TrustedComms} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {CurrentCallSolution} solution - Path solution
 *
 * @returns CurrentCallPage
 */
/* jshint ignore:end */
CurrentCallPage = function CurrentCallPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(CurrentCallPage.prototype, Page.prototype);
CurrentCallPage.prototype.constructor = CurrentCallPage;

/* jshint ignore:start */
/**
 * Build an instance of CurrentCallInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.TrustedComms.CurrentCallPage#
 *
 * @param {CurrentCallPayload} payload - Payload response from the API
 *
 * @returns CurrentCallInstance
 */
/* jshint ignore:end */
CurrentCallPage.prototype.getInstance = function getInstance(payload) {
  return new CurrentCallInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Preview.TrustedComms.CurrentCallPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
CurrentCallPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

CurrentCallPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the CurrentCallContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.CurrentCallInstance
 *
 * @property {string} sid -
 *          A string that uniquely identifies this current phone call.
 * @property {string} from - The originating phone number
 * @property {string} to - The terminating phone number
 * @property {string} status - The status of the current phone call
 * @property {string} reason - The business reason for this current phone call
 * @property {Date} createdAt - The date this current phone call was created
 * @property {string} caller - Caller name of the current phone call
 * @property {string} logo - Logo URL of the caller
 * @property {string} bgColor - Background color of the current phone call
 * @property {string} fontColor - Font color of the current phone call
 * @property {string} useCase - The use case for the current phone call
 * @property {string} manager - The name of the CPS organization
 * @property {string} shieldImg -
 *          Shield image URL that serves as authenticity proof of the current phone call
 * @property {string} url - The URL of this resource.
 *
 * @param {TrustedComms} version - Version of the resource
 * @param {CurrentCallPayload} payload - The instance payload
 */
/* jshint ignore:end */
CurrentCallInstance = function CurrentCallInstance(version, payload) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.from = payload.from; // jshint ignore:line
  this.to = payload.to; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.reason = payload.reason; // jshint ignore:line
  this.createdAt = deserialize.iso8601DateTime(payload.created_at); // jshint ignore:line
  this.caller = payload.caller; // jshint ignore:line
  this.logo = payload.logo; // jshint ignore:line
  this.bgColor = payload.bg_color; // jshint ignore:line
  this.fontColor = payload.font_color; // jshint ignore:line
  this.useCase = payload.use_case; // jshint ignore:line
  this.manager = payload.manager; // jshint ignore:line
  this.shieldImg = payload.shield_img; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {};
};

Object.defineProperty(CurrentCallInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CurrentCallContext(this._version);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a CurrentCallInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.TrustedComms.CurrentCallInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.from] - The originating Phone Number
 * @param {string} [opts.to] - The terminating Phone Number
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CurrentCallInstance
 */
/* jshint ignore:end */
CurrentCallInstance.prototype.fetch = function fetch(opts, callback) {
  return this._proxy.fetch(opts, callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Preview.TrustedComms.CurrentCallInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
CurrentCallInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

CurrentCallInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the CurrentCallContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.CurrentCallContext
 *
 * @param {TrustedComms} version - Version of the resource
 */
/* jshint ignore:end */
CurrentCallContext = function CurrentCallContext(version) {
  this._version = version;

  // Path Solution
  this._solution = {};
  this._uri = `/CurrentCall`;
};

/* jshint ignore:start */
/**
 * fetch a CurrentCallInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.TrustedComms.CurrentCallContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.from] - The originating Phone Number
 * @param {string} [opts.to] - The terminating Phone Number
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CurrentCallInstance
 */
/* jshint ignore:end */
CurrentCallContext.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({'From': _.get(opts, 'from'), 'To': _.get(opts, 'to')});

  var promise = this._version.fetch({uri: this._uri, method: 'GET', params: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new CurrentCallInstance(this._version, payload));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Preview.TrustedComms.CurrentCallContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
CurrentCallContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

CurrentCallContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  CurrentCallList: CurrentCallList,
  CurrentCallPage: CurrentCallPage,
  CurrentCallInstance: CurrentCallInstance,
  CurrentCallContext: CurrentCallContext
};
