import { DynamicModule, Module } from '@nestjs/common';

import { MailchimpCoreModule } from './mailchimp-core.module';
import {
    MailchimpConfigAsyncOptions,
    MailchimpConfigOptions,
} from './common/interfaces';

@Module({})
export class MailchimpModule {
    public static forRoot(options: MailchimpConfigOptions): DynamicModule {
        return {
            module: MailchimpModule,
            imports: [
                MailchimpCoreModule.forRoot(options as MailchimpConfigOptions),
            ],
        };
    }

    public static forRootAsync(
        options: MailchimpConfigAsyncOptions,
    ): DynamicModule {
        return {
            module: MailchimpModule,
            imports: [MailchimpCoreModule.forRootAsync(options)],
        };
    }
}
