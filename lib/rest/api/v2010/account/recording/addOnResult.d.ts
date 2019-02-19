/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { PayloadList } from './addOnResult/payload';
import { PayloadListInstance } from './addOnResult/payload';
import { SerializableClass } from '../../../../../interfaces';

type AddOnResultStatus = 'canceled'|'completed'|'deleted'|'failed'|'in-progress'|'init'|'processing'|'queued';

/**
 * @description Initialize the AddOnResultList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 * @param referenceSid - A string that uniquely identifies the recording.
 */
declare function AddOnResultList(version: V2010, accountSid: string, referenceSid: string): AddOnResultListInstance;

interface AddOnResultListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AddOnResultContext;
  /**
   * Streams AddOnResultInstance records from the API.
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
  each(opts?: AddOnResultListInstanceEachOptions, callback?: (item: AddOnResultInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a add_on_result
   *
   * @param sid - Fetch by unique result Sid
   */
  get(sid: string): AddOnResultContext;
  /**
   * Retrieve a single target page of AddOnResultInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AddOnResultPage) => any): Promise<AddOnResultPage>;
  /**
   * Lists AddOnResultInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AddOnResultListInstanceOptions, callback?: (error: Error | null, items: AddOnResultInstance[]) => any): Promise<AddOnResultInstance[]>;
  /**
   * Retrieve a single page of AddOnResultInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AddOnResultListInstancePageOptions, callback?: (error: Error | null, items: AddOnResultPage) => any): Promise<AddOnResultPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
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
interface AddOnResultListInstanceEachOptions {
  callback?: (item: AddOnResultInstance, done: (err?: Error) => void) => void;
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
interface AddOnResultListInstanceOptions {
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
interface AddOnResultListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface AddOnResultPayload extends AddOnResultResource, Page.TwilioResponsePayload {
}

interface AddOnResultResource {
  account_sid: string;
  add_on_configuration_sid: string;
  add_on_sid: string;
  date_completed: Date;
  date_created: Date;
  date_updated: Date;
  reference_sid: string;
  sid: string;
  status: AddOnResultStatus;
  subresource_uris: string;
}

interface AddOnResultSolution {
  accountSid?: string;
  referenceSid?: string;
}


declare class AddOnResultContext {
  /**
   * Initialize the AddOnResultContext
   *
   * @property payloads - payloads resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param referenceSid - The reference_sid
   * @param sid - Fetch by unique result Sid
   */
  constructor(version: V2010, accountSid: string, referenceSid: string, sid: string);

  /**
   * fetch a AddOnResultInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AddOnResultInstance) => any): Promise<AddOnResultInstance>;
  payloads: PayloadListInstance;
  /**
   * remove a AddOnResultInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AddOnResultInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class AddOnResultInstance extends SerializableClass {
  /**
   * Initialize the AddOnResultContext
   *
   * @property sid - A string that uniquely identifies this result
   * @property accountSid - The unique sid that identifies this account
   * @property status - The status of this result.
   * @property addOnSid - A string that uniquely identifies the Add-on.
   * @property addOnConfigurationSid - A string that uniquely identifies the Add-on configuration.
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property dateCompleted - The date this result was completed.
   * @property referenceSid - A string that uniquely identifies the recording.
   * @property subresourceUris - A dictionary of URIs for related resources
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param referenceSid - A string that uniquely identifies the recording.
   * @param sid - Fetch by unique result Sid
   */
  constructor(version: V2010, payload: AddOnResultPayload, accountSid: string, referenceSid: string, sid: string);

  private _proxy: AddOnResultContext;
  accountSid: string;
  addOnConfigurationSid: string;
  addOnSid: string;
  dateCompleted: Date;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a AddOnResultInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AddOnResultInstance) => any): void;
  /**
   * Access the payloads
   */
  payloads(): PayloadListInstance;
  referenceSid: string;
  /**
   * remove a AddOnResultInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AddOnResultInstance) => any): void;
  sid: string;
  status: AddOnResultStatus;
  subresourceUris: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class AddOnResultPage extends Page<V2010, AddOnResultPayload, AddOnResultResource, AddOnResultInstance> {
  /**
   * Initialize the AddOnResultPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: AddOnResultSolution);

  /**
   * Build an instance of AddOnResultInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AddOnResultPayload): AddOnResultInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { AddOnResultContext, AddOnResultInstance, AddOnResultList, AddOnResultListInstance, AddOnResultListInstanceEachOptions, AddOnResultListInstanceOptions, AddOnResultListInstancePageOptions, AddOnResultPage, AddOnResultPayload, AddOnResultResource, AddOnResultSolution }
