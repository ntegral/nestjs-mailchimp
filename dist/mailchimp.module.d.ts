import { DynamicModule } from '@nestjs/common';
import { MailchimpConfigAsyncOptions, MailchimpConfigOptions } from './common/interfaces';
export declare class MailchimpModule {
    static forRoot(options: MailchimpConfigOptions): DynamicModule;
    static forRootAsync(options: MailchimpConfigAsyncOptions): DynamicModule;
}
