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

type VerificationCheckChannel = 'sms'|'call';

/**
 * @description Initialize the VerificationCheckList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 */
declare function VerificationCheckList(version: V1, serviceSid: string): VerificationCheckListInstance;

interface VerificationCheckListInstance {
  /**
   * create a VerificationCheckInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: VerificationCheckListInstanceCreateOptions, callback?: (error: Error | null, item: VerificationCheckInstance) => any): Promise<VerificationCheckInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property amount - Amount of the associated PSD2 compliant transaction.
 * @property code - The verification string
 * @property payee - Payee of the associated PSD2 compliant transaction.
 * @property to - To phone number
 * @property verificationSid - A SID that uniquely identifies this Verification Check
 */
interface VerificationCheckListInstanceCreateOptions {
  amount?: string;
  code: string;
  payee?: string;
  to?: string;
  verificationSid?: string;
}

interface VerificationCheckPayload extends VerificationCheckResource, Page.TwilioResponsePayload {
}

interface VerificationCheckResource {
  account_sid: string;
  amount: string;
  channel: VerificationCheckChannel;
  date_created: Date;
  date_updated: Date;
  payee: string;
  service_sid: string;
  sid: string;
  status: string;
  to: string;
  valid: boolean;
}

interface VerificationCheckSolution {
  serviceSid?: string;
}


declare class VerificationCheckInstance extends SerializableClass {
  /**
   * Initialize the VerificationCheckContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this Verification Check.
   * @property serviceSid - Service Sid.
   * @property accountSid - Account Sid.
   * @property to - To phone number
   * @property channel - sms or call
   * @property status - pending, approved, denied or expired
   * @property valid - successful verification
   * @property amount - Amount of the associated PSD2 compliant transaction.
   * @property payee - Payee of the associated PSD2 compliant transaction.
   * @property dateCreated - The date this Verification Check was created
   * @property dateUpdated - The date this Verification Check was updated
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   */
  constructor(version: V1, payload: VerificationCheckPayload, serviceSid: string);

  accountSid: string;
  amount: string;
  channel: VerificationCheckChannel;
  dateCreated: Date;
  dateUpdated: Date;
  payee: string;
  serviceSid: string;
  sid: string;
  status: string;
  to: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  valid: boolean;
}


declare class VerificationCheckPage extends Page<V1, VerificationCheckPayload, VerificationCheckResource, VerificationCheckInstance> {
  /**
   * Initialize the VerificationCheckPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: VerificationCheckSolution);

  /**
   * Build an instance of VerificationCheckInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: VerificationCheckPayload): VerificationCheckInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { VerificationCheckInstance, VerificationCheckList, VerificationCheckListInstance, VerificationCheckListInstanceCreateOptions, VerificationCheckPage, VerificationCheckPayload, VerificationCheckResource, VerificationCheckSolution }
