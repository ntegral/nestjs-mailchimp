import { MailchimpConfigOptions } from '../common/interfaces';
import { MAILCHIMP_TOKEN, createMailchimpClient } from '../common';

export function createMailchimpProviders(options: MailchimpConfigOptions) {
    return {
        provide: MAILCHIMP_TOKEN,
        useValue: createMailchimpClient(options),
    };
}
