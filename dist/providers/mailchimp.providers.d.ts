import { MailchimpConfigOptions } from '../common/interfaces';
export declare function createMailchimpProviders(options: MailchimpConfigOptions): {
    provide: string;
    useValue: import("mailchimp-api-v3");
};
