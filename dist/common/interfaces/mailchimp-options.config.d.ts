import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
export interface MailchimpConfigOptions {
    apikey: string;
}
export interface MailchimpConfigOptionsFactory {
    createMailchimpConfigOptions(): Promise<MailchimpConfigOptions> | MailchimpConfigOptions;
}
export interface MailchimpConfigAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useClass?: Type<MailchimpConfigOptionsFactory>;
    useExisting?: Type<MailchimpConfigOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<MailchimpConfigOptions> | MailchimpConfigOptions;
}
