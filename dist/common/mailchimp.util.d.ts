import { MailchimpConfigOptions } from './interfaces';
import Mailchimp = require('mailchimp-api-v3');
export declare function createMailchimpClient(options: MailchimpConfigOptions): Mailchimp;
