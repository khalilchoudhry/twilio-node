/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the ShortCodeList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that this resource is associated with
 */
declare function ShortCodeList(version: V1, serviceSid: string): ShortCodeListInstance;

interface ShortCodeListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ShortCodeContext;
  /**
   * create a ShortCodeInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ShortCodeListInstanceCreateOptions, callback?: (error: Error | null, item: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
  /**
   * Streams ShortCodeInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: ShortCodeListInstanceEachOptions, callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a short_code
   *
   * @param sid - The unique string that identifies this resource
   */
  get(sid: string): ShortCodeContext;
  /**
   * Retrieve a single target page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
  /**
   * Lists ShortCodeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ShortCodeListInstanceOptions, callback?: (error: Error | null, items: ShortCodeInstance[]) => any): Promise<ShortCodeInstance[]>;
  /**
   * Retrieve a single page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ShortCodeListInstancePageOptions, callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property shortCodeSid - SID of the ShortCode being added to the Service.
 */
interface ShortCodeListInstanceCreateOptions {
  shortCodeSid: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface ShortCodeListInstanceEachOptions {
  callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface ShortCodeListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface ShortCodeListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ShortCodePayload extends ShortCodeResource, Page.TwilioResponsePayload {
}

interface ShortCodeResource {
  account_sid: string;
  capabilities: string;
  country_code: string;
  date_created: Date;
  date_updated: Date;
  service_sid: string;
  short_code: string;
  sid: string;
  url: string;
}

interface ShortCodeSolution {
  serviceSid?: string;
}


declare class ShortCodeContext {
  /**
   * Initialize the ShortCodeContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Service to fetch the resource from
   * @param sid - The unique string that identifies this resource
   */
  constructor(version: V1, serviceSid: string, sid: string);

  /**
   * fetch a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
  /**
   * remove a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ShortCodeInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class ShortCodeInstance extends SerializableClass {
  /**
   * Initialize the ShortCodeContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The unique string that identifies this resource
   * @property accountSid - The SID of the Account that created this resource
   * @property serviceSid - The SID of the Service that this resource is associated with
   * @property dateCreated - The RFC 2822 date and time in GMT that this resource was created
   * @property dateUpdated - The RFC 2822 date and time in GMT that this resource was last updated
   * @property shortCode - The E.164 format of the short code.
   * @property countryCode - The 2-character ISO Country Code of the number.
   * @property capabilities - Any array of values that indicate whether the number can receive calls or messages.
   * @property url - The absolute URL of this ShortCode resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that this resource is associated with
   * @param sid - The unique string that identifies this resource
   */
  constructor(version: V1, payload: ShortCodePayload, serviceSid: string, sid: string);

  private _proxy: ShortCodeContext;
  accountSid: string;
  capabilities: string;
  countryCode: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ShortCodeInstance) => any): void;
  /**
   * remove a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ShortCodeInstance) => any): void;
  serviceSid: string;
  shortCode: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class ShortCodePage extends Page<V1, ShortCodePayload, ShortCodeResource, ShortCodeInstance> {
  /**
   * Initialize the ShortCodePagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ShortCodeSolution);

  /**
   * Build an instance of ShortCodeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ShortCodePayload): ShortCodeInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ShortCodeContext, ShortCodeInstance, ShortCodeList, ShortCodeListInstance, ShortCodeListInstanceCreateOptions, ShortCodeListInstanceEachOptions, ShortCodeListInstanceOptions, ShortCodeListInstancePageOptions, ShortCodePage, ShortCodePayload, ShortCodeResource, ShortCodeSolution }
