/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the ActivityList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The unique ID of the Workspace that this Activity belongs to.
 */
declare function ActivityList(version: V1, workspaceSid: string): ActivityListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A human-readable name for the Activity, such as 'on-call', 'break', 'email', etc.
 */
interface ActivityInstanceUpdateOptions {
  friendlyName?: string;
}

interface ActivityListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ActivityContext;
  /**
   * create a ActivityInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ActivityListInstanceCreateOptions, callback?: (error: Error | null, item: ActivityInstance) => any): Promise<ActivityInstance>;
  /**
   * Streams ActivityInstance records from the API.
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
  each(opts?: ActivityListInstanceEachOptions, callback?: (item: ActivityInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a activity
   *
   * @param sid - The sid
   */
  get(sid: string): ActivityContext;
  /**
   * Retrieve a single target page of ActivityInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ActivityPage) => any): Promise<ActivityPage>;
  /**
   * Lists ActivityInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ActivityListInstanceOptions, callback?: (error: Error | null, items: ActivityInstance[]) => any): Promise<ActivityInstance[]>;
  /**
   * Retrieve a single page of ActivityInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ActivityListInstancePageOptions, callback?: (error: Error | null, items: ActivityPage) => any): Promise<ActivityPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property available - Boolean value indicating whether the worker should be eligible to receive a Task when they occupy this Activity.
 * @property friendlyName - A human-readable name for the Activity, such as 'On Call', 'Break', 'Email', etc.
 */
interface ActivityListInstanceCreateOptions {
  available?: boolean;
  friendlyName: string;
}

/**
 * Options to pass to each
 *
 * @property available - Filter by activities that are available or unavailable.
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - Filter by an Activity's friendly name
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
interface ActivityListInstanceEachOptions {
  available?: string;
  callback?: (item: ActivityInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property available - Filter by activities that are available or unavailable.
 * @property friendlyName - Filter by an Activity's friendly name
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
interface ActivityListInstanceOptions {
  available?: string;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property available - Filter by activities that are available or unavailable.
 * @property friendlyName - Filter by an Activity's friendly name
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface ActivityListInstancePageOptions {
  available?: string;
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ActivityPayload extends ActivityResource, Page.TwilioResponsePayload {
}

interface ActivityResource {
  account_sid: string;
  available: boolean;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  url: string;
  workspace_sid: string;
}

interface ActivitySolution {
  workspaceSid?: string;
}


declare class ActivityContext {
  /**
   * Initialize the ActivityContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: V1, workspaceSid: string, sid: string);

  /**
   * fetch a ActivityInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ActivityInstance) => any): Promise<ActivityInstance>;
  /**
   * remove a ActivityInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ActivityInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ActivityInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ActivityInstanceUpdateOptions, callback?: (error: Error | null, items: ActivityInstance) => any): Promise<ActivityInstance>;
}


declare class ActivityInstance extends SerializableClass {
  /**
   * Initialize the ActivityContext
   *
   * @property accountSid - The unique ID of the Account that owns this Activity.
   * @property available - Filter by activities that are available or unavailable.
   * @property dateCreated - The date this Activity was created.
   * @property dateUpdated - The date this Activity was updated.
   * @property friendlyName - Filter by an Activity's friendly name
   * @property sid - The unique ID for this Activity.
   * @property workspaceSid - The unique ID of the Workspace that this Activity belongs to.
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The unique ID of the Workspace that this Activity belongs to.
   * @param sid - The sid
   */
  constructor(version: V1, payload: ActivityPayload, workspaceSid: string, sid: string);

  private _proxy: ActivityContext;
  accountSid: string;
  available: boolean;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ActivityInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ActivityInstance) => any): void;
  friendlyName: string;
  /**
   * remove a ActivityInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ActivityInstance) => any): void;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ActivityInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ActivityInstanceUpdateOptions, callback?: (error: Error | null, items: ActivityInstance) => any): void;
  url: string;
  workspaceSid: string;
}


declare class ActivityPage extends Page<V1, ActivityPayload, ActivityResource, ActivityInstance> {
  /**
   * Initialize the ActivityPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ActivitySolution);

  /**
   * Build an instance of ActivityInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ActivityPayload): ActivityInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ActivityContext, ActivityInstance, ActivityList, ActivityListInstance, ActivityListInstanceCreateOptions, ActivityListInstanceEachOptions, ActivityListInstanceOptions, ActivityListInstancePageOptions, ActivityPage, ActivityPayload, ActivityResource, ActivitySolution }
