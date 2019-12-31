import { MailchimpConfigOptions } from './interfaces';
import Mailchimp = require('mailchimp-api-v3');

export function createMailchimpClient(options: MailchimpConfigOptions) {
    const client = new Mailchimp(options.apikey);
    return client;
}
