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

var CallSummaryList;
var CallSummaryPage;
var CallSummaryInstance;
var CallSummaryContext;

/* jshint ignore:start */
/**
 * Initialize the CallSummaryList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Insights.V1.CallSummaryList
 *
 * @param {Twilio.Insights.V1} version - Version of the resource
 */
/* jshint ignore:end */
CallSummaryList = function CallSummaryList(version) {
  /* jshint ignore:start */
  /**
   * @function summary
   * @memberof Twilio.Insights.V1#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Insights.V1.CallSummaryContext}
   */
  /* jshint ignore:end */
  function CallSummaryListInstance(sid) {
    return CallSummaryListInstance.get(sid);
  }

  CallSummaryListInstance._version = version;
  // Path Solution
  CallSummaryListInstance._solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a call_summary
   *
   * @function get
   * @memberof Twilio.Insights.V1.CallSummaryList#
   *
   * @param {string} callSid - The call_sid
   *
   * @returns {Twilio.Insights.V1.CallSummaryContext}
   */
  /* jshint ignore:end */
  CallSummaryListInstance.get = function get(callSid) {
    return new CallSummaryContext(this._version, callSid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Insights.V1.CallSummaryList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  CallSummaryListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  CallSummaryListInstance[util.inspect.custom] = function inspect(depth, options)
      {
    return util.inspect(this.toJSON(), options);
  };

  return CallSummaryListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the CallSummaryPage
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Insights.V1.CallSummaryPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {CallSummarySolution} solution - Path solution
 *
 * @returns CallSummaryPage
 */
/* jshint ignore:end */
CallSummaryPage = function CallSummaryPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(CallSummaryPage.prototype, Page.prototype);
CallSummaryPage.prototype.constructor = CallSummaryPage;

/* jshint ignore:start */
/**
 * Build an instance of CallSummaryInstance
 *
 * @function getInstance
 * @memberof Twilio.Insights.V1.CallSummaryPage#
 *
 * @param {CallSummaryPayload} payload - Payload response from the API
 *
 * @returns CallSummaryInstance
 */
/* jshint ignore:end */
CallSummaryPage.prototype.getInstance = function getInstance(payload) {
  return new CallSummaryInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Insights.V1.CallSummaryPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
CallSummaryPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

CallSummaryPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the CallSummaryContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Insights.V1.CallSummaryInstance
 *
 * @property {string} accountSid - The account_sid
 * @property {string} callSid - The call_sid
 * @property {call_summary.call_type} callType - The call_type
 * @property {call_summary.call_state} callState - The call_state
 * @property {call_summary.processing_state} processingState - The processing_state
 * @property {call_summary.direction} direction - The direction
 * @property {call_summary.disconnected_by} disconnectedBy - The disconnected_by
 * @property {Date} startTime - The start_time
 * @property {Date} endTime - The end_time
 * @property {number} duration - The duration
 * @property {number} connectDuration - The connect_duration
 * @property {string} from - The from
 * @property {string} to - The to
 * @property {string} carrierEdge - The carrier_edge
 * @property {string} clientEdge - The client_edge
 * @property {string} sdkEdge - The sdk_edge
 * @property {string} sipEdge - The sip_edge
 * @property {string} tags - The tags
 * @property {string} url - The url
 * @property {string} attributes - The attributes
 *
 * @param {V1} version - Version of the resource
 * @param {CallSummaryPayload} payload - The instance payload
 * @param {sid} callSid - The call_sid
 */
/* jshint ignore:end */
CallSummaryInstance = function CallSummaryInstance(version, payload, callSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.callSid = payload.call_sid; // jshint ignore:line
  this.callType = payload.call_type; // jshint ignore:line
  this.callState = payload.call_state; // jshint ignore:line
  this.processingState = payload.processing_state; // jshint ignore:line
  this.direction = payload.direction; // jshint ignore:line
  this.disconnectedBy = payload.disconnected_by; // jshint ignore:line
  this.startTime = deserialize.iso8601DateTime(payload.start_time); // jshint ignore:line
  this.endTime = deserialize.iso8601DateTime(payload.end_time); // jshint ignore:line
  this.duration = deserialize.integer(payload.duration); // jshint ignore:line
  this.connectDuration = deserialize.integer(payload.connect_duration); // jshint ignore:line
  this.from = payload.from; // jshint ignore:line
  this.to = payload.to; // jshint ignore:line
  this.carrierEdge = payload.carrier_edge; // jshint ignore:line
  this.clientEdge = payload.client_edge; // jshint ignore:line
  this.sdkEdge = payload.sdk_edge; // jshint ignore:line
  this.sipEdge = payload.sip_edge; // jshint ignore:line
  this.tags = payload.tags; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.attributes = payload.attributes; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {callSid: callSid || this.callSid, };
};

Object.defineProperty(CallSummaryInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CallSummaryContext(this._version, this._solution.callSid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a CallSummaryInstance
 *
 * @function fetch
 * @memberof Twilio.Insights.V1.CallSummaryInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {call_summary.processing_state} [opts.processingState] -
 *          The processing_state
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CallSummaryInstance
 */
/* jshint ignore:end */
CallSummaryInstance.prototype.fetch = function fetch(opts, callback) {
  return this._proxy.fetch(opts, callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Insights.V1.CallSummaryInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
CallSummaryInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

CallSummaryInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the CallSummaryContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Insights.V1.CallSummaryContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} callSid - The call_sid
 */
/* jshint ignore:end */
CallSummaryContext = function CallSummaryContext(version, callSid) {
  this._version = version;

  // Path Solution
  this._solution = {callSid: callSid, };
  this._uri = `/Voice/${callSid}/Summary`;
};

/* jshint ignore:start */
/**
 * fetch a CallSummaryInstance
 *
 * @function fetch
 * @memberof Twilio.Insights.V1.CallSummaryContext#
 *
 * @param {object} [opts] - Options for request
 * @param {call_summary.processing_state} [opts.processingState] -
 *          The processing_state
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CallSummaryInstance
 */
/* jshint ignore:end */
CallSummaryContext.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({'ProcessingState': _.get(opts, 'processingState')});

  var promise = this._version.fetch({uri: this._uri, method: 'GET', params: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new CallSummaryInstance(this._version, payload, this._solution.callSid));
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
 * @memberof Twilio.Insights.V1.CallSummaryContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
CallSummaryContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

CallSummaryContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  CallSummaryList: CallSummaryList,
  CallSummaryPage: CallSummaryPage,
  CallSummaryInstance: CallSummaryInstance,
  CallSummaryContext: CallSummaryContext
};
