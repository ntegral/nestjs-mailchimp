import { DynamicModule } from '@nestjs/common';
import { MailchimpConfigOptions, MailchimpConfigAsyncOptions } from './common/interfaces';
export declare class MailchimpCoreModule {
    static forRoot(options: MailchimpConfigOptions): DynamicModule;
    static forRootAsync(options: MailchimpConfigAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
