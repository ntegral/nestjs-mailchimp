import { Global, Module, DynamicModule, Provider, Type } from '@nestjs/common';
import { createMailchimpProviders } from './providers';
import {
    MailchimpConfigOptions,
    MailchimpConfigAsyncOptions,
    MailchimpConfigOptionsFactory,
} from './common/interfaces';
import {
    MAILCHIMP_MODULE_OPTIONS,
    MAILCHIMP_TOKEN,
    createMailchimpClient,
} from './common';

@Global()
@Module({})
export class MailchimpCoreModule {
    public static forRoot(options: MailchimpConfigOptions): DynamicModule {
        const provider = createMailchimpProviders(options);

        return {
            exports: [provider],
            module: MailchimpCoreModule,
            providers: [provider],
        };
    }

    public static forRootAsync(
        options: MailchimpConfigAsyncOptions,
    ): DynamicModule {
        const provider: Provider = {
            inject: [MAILCHIMP_MODULE_OPTIONS],
            provide: MAILCHIMP_TOKEN,
            useFactory: (options: MailchimpConfigOptions) =>
                createMailchimpClient(options),
        };

        return {
            exports: [provider],
            imports: options.imports,
            module: MailchimpCoreModule,
            providers: [...this.createAsyncProviders(options), provider],
        };
    }

    private static createAsyncProviders(
        options: MailchimpConfigAsyncOptions,
    ): Provider[] {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        const useClass = options.useClass as Type<
            MailchimpConfigOptionsFactory
        >;
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: useClass,
                useClass,
            },
        ];
    }

    private static createAsyncOptionsProvider(
        options: MailchimpConfigAsyncOptions,
    ): Provider {
        if (options.useFactory) {
            return {
                inject: options.inject || [],
                provide: MAILCHIMP_MODULE_OPTIONS,
                useFactory: options.useFactory,
            };
        }
        const inject = [
            (options.useClass || options.useExisting) as Type<
                MailchimpConfigOptionsFactory
            >,
        ];
        return {
            provide: MAILCHIMP_MODULE_OPTIONS,
            useFactory: async (optionsFactory: MailchimpConfigOptionsFactory) =>
                await optionsFactory.createMailchimpConfigOptions(),
            inject,
        };
    }
}
