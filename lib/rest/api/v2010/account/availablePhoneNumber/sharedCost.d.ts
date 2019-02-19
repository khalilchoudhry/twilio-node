/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the SharedCostList
 *
 * @param version - Version of the resource
 * @param accountSid - The account_sid
 * @param countryCode - The ISO-3166-1 country code of the country.
 */
declare function SharedCostList(version: V2010, accountSid: string, countryCode: string): SharedCostListInstance;

interface SharedCostListInstance {
  /**
   * Streams SharedCostInstance records from the API.
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
  each(opts?: SharedCostListInstanceEachOptions, callback?: (item: SharedCostInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of SharedCostInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SharedCostPage) => any): Promise<SharedCostPage>;
  /**
   * Lists SharedCostInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SharedCostListInstanceOptions, callback?: (error: Error | null, items: SharedCostInstance[]) => any): Promise<SharedCostInstance[]>;
  /**
   * Retrieve a single page of SharedCostInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SharedCostListInstancePageOptions, callback?: (error: Error | null, items: SharedCostPage) => any): Promise<SharedCostPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property areaCode - The area code of the phone numbers to read
 * @property beta - Whether to read phone numbers new to the Twilio platform
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property contains - The pattern on which to match phone numbers
 * @property distance - The search radius, in miles, for a near_ query. (US/Canada only)
 * @property done - Function to be called upon completion of streaming
 * @property excludeAllAddressRequired - Whether to exclude phone numbers that require an Address
 * @property excludeForeignAddressRequired - Whether to exclude phone numbers that require a foreign address
 * @property excludeLocalAddressRequired - Whether to exclude phone numbers that require a local address
 * @property faxEnabled - Whether the phone numbers can receive faxes
 * @property inLata - Limit results to a specific local access and transport area. (US/Canada only)
 * @property inLocality - Limit results to a particular locality
 * @property inPostalCode - Limit results to a particular postal code. (US/Canada only)
 * @property inRateCenter - Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
 * @property inRegion - Limit results to a particular region. (US/Canada only)
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property mmsEnabled - Whether the phone numbers can receive MMS messages
 * @property nearLatLong - Given a latitude/longitude pair lat,long find geographically close numbers within distance miles. (US/Canada only)
 * @property nearNumber - Given a phone number, find a geographically close number within distance miles. (US/Canada only)
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property smsEnabled - Whether the phone numbers can receive text messages
 * @property voiceEnabled - Whether the phone numbers can receive calls.
 */
interface SharedCostListInstanceEachOptions {
  areaCode?: number;
  beta?: boolean;
  callback?: (item: SharedCostInstance, done: (err?: Error) => void) => void;
  contains?: string;
  distance?: number;
  done?: Function;
  excludeAllAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  faxEnabled?: boolean;
  inLata?: string;
  inLocality?: string;
  inPostalCode?: string;
  inRateCenter?: string;
  inRegion?: string;
  limit?: number;
  mmsEnabled?: boolean;
  nearLatLong?: string;
  nearNumber?: string;
  pageSize?: number;
  smsEnabled?: boolean;
  voiceEnabled?: boolean;
}

/**
 * Options to pass to list
 *
 * @property areaCode - The area code of the phone numbers to read
 * @property beta - Whether to read phone numbers new to the Twilio platform
 * @property contains - The pattern on which to match phone numbers
 * @property distance - The search radius, in miles, for a near_ query. (US/Canada only)
 * @property excludeAllAddressRequired - Whether to exclude phone numbers that require an Address
 * @property excludeForeignAddressRequired - Whether to exclude phone numbers that require a foreign address
 * @property excludeLocalAddressRequired - Whether to exclude phone numbers that require a local address
 * @property faxEnabled - Whether the phone numbers can receive faxes
 * @property inLata - Limit results to a specific local access and transport area. (US/Canada only)
 * @property inLocality - Limit results to a particular locality
 * @property inPostalCode - Limit results to a particular postal code. (US/Canada only)
 * @property inRateCenter - Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
 * @property inRegion - Limit results to a particular region. (US/Canada only)
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property mmsEnabled - Whether the phone numbers can receive MMS messages
 * @property nearLatLong - Given a latitude/longitude pair lat,long find geographically close numbers within distance miles. (US/Canada only)
 * @property nearNumber - Given a phone number, find a geographically close number within distance miles. (US/Canada only)
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property smsEnabled - Whether the phone numbers can receive text messages
 * @property voiceEnabled - Whether the phone numbers can receive calls.
 */
interface SharedCostListInstanceOptions {
  areaCode?: number;
  beta?: boolean;
  contains?: string;
  distance?: number;
  excludeAllAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  faxEnabled?: boolean;
  inLata?: string;
  inLocality?: string;
  inPostalCode?: string;
  inRateCenter?: string;
  inRegion?: string;
  limit?: number;
  mmsEnabled?: boolean;
  nearLatLong?: string;
  nearNumber?: string;
  pageSize?: number;
  smsEnabled?: boolean;
  voiceEnabled?: boolean;
}

/**
 * Options to pass to page
 *
 * @property areaCode - The area code of the phone numbers to read
 * @property beta - Whether to read phone numbers new to the Twilio platform
 * @property contains - The pattern on which to match phone numbers
 * @property distance - The search radius, in miles, for a near_ query. (US/Canada only)
 * @property excludeAllAddressRequired - Whether to exclude phone numbers that require an Address
 * @property excludeForeignAddressRequired - Whether to exclude phone numbers that require a foreign address
 * @property excludeLocalAddressRequired - Whether to exclude phone numbers that require a local address
 * @property faxEnabled - Whether the phone numbers can receive faxes
 * @property inLata - Limit results to a specific local access and transport area. (US/Canada only)
 * @property inLocality - Limit results to a particular locality
 * @property inPostalCode - Limit results to a particular postal code. (US/Canada only)
 * @property inRateCenter - Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
 * @property inRegion - Limit results to a particular region. (US/Canada only)
 * @property mmsEnabled - Whether the phone numbers can receive MMS messages
 * @property nearLatLong - Given a latitude/longitude pair lat,long find geographically close numbers within distance miles. (US/Canada only)
 * @property nearNumber - Given a phone number, find a geographically close number within distance miles. (US/Canada only)
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property smsEnabled - Whether the phone numbers can receive text messages
 * @property voiceEnabled - Whether the phone numbers can receive calls.
 */
interface SharedCostListInstancePageOptions {
  areaCode?: number;
  beta?: boolean;
  contains?: string;
  distance?: number;
  excludeAllAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  faxEnabled?: boolean;
  inLata?: string;
  inLocality?: string;
  inPostalCode?: string;
  inRateCenter?: string;
  inRegion?: string;
  mmsEnabled?: boolean;
  nearLatLong?: string;
  nearNumber?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  smsEnabled?: boolean;
  voiceEnabled?: boolean;
}

interface SharedCostPayload extends SharedCostResource, Page.TwilioResponsePayload {
}

interface SharedCostResource {
  address_requirements: string;
  beta: boolean;
  capabilities: string;
  friendly_name: string;
  iso_country: string;
  lata: string;
  latitude: number;
  locality: string;
  longitude: number;
  phone_number: string;
  postal_code: string;
  rate_center: string;
  region: string;
}

interface SharedCostSolution {
  accountSid?: string;
  countryCode?: string;
}


declare class SharedCostInstance extends SerializableClass {
  /**
   * Initialize the SharedCostContext
   *
   * @property friendlyName - A formatted version of the phone number
   * @property phoneNumber - The phone number in E.164 format
   * @property lata - The LATA of this phone number
   * @property locality - The locality or city of this phone number's location
   * @property rateCenter - The rate center of this phone number
   * @property latitude - The latitude of this phone number's location
   * @property longitude - The longitude of this phone number's location
   * @property region - The two-letter state or province abbreviation of this phone number's location
   * @property postalCode - The postal or ZIP code of this phone number's location
   * @property isoCountry - The ISO country code of this phone number
   * @property addressRequirements - The type of Address resource the phone number requires
   * @property beta - Whether the phone number is new to the Twilio platform
   * @property capabilities - Whether a phone number can receive calls or messages
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param countryCode - The ISO-3166-1 country code of the country.
   */
  constructor(version: V2010, payload: SharedCostPayload, accountSid: string, countryCode: string);

  addressRequirements: string;
  beta: boolean;
  capabilities: string;
  friendlyName: string;
  isoCountry: string;
  lata: string;
  latitude: number;
  locality: string;
  longitude: number;
  phoneNumber: string;
  postalCode: string;
  rateCenter: string;
  region: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class SharedCostPage extends Page<V2010, SharedCostPayload, SharedCostResource, SharedCostInstance> {
  /**
   * Initialize the SharedCostPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: SharedCostSolution);

  /**
   * Build an instance of SharedCostInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SharedCostPayload): SharedCostInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SharedCostInstance, SharedCostList, SharedCostListInstance, SharedCostListInstanceEachOptions, SharedCostListInstanceOptions, SharedCostListInstancePageOptions, SharedCostPage, SharedCostPayload, SharedCostResource, SharedCostSolution }
