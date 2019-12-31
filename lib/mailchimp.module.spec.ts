import { Test } from '@nestjs/testing';
import { MailchimpModule } from './mailchimp.module';
import {
    MailchimpConfigOptions,
    MailchimpConfigAsyncOptions,
    MailchimpConfigOptionsFactory,
} from './common/interfaces';
import Mailchimp = require('mailchimp-api-v3');
import { MAILCHIMP_TOKEN } from './common';

describe('MailchimpModule', () => {
    let config: MailchimpConfigOptions = {
        apikey: '',
    };

    class TestService implements MailchimpConfigOptionsFactory {
        createMailchimpConfigOptions(): MailchimpConfigOptions {
            return config;
        }
    }

    describe('forRoot 1.0', () => {
        it('should provide the jsforce client', async () => {
            const mod = await Test.createTestingModule({
                imports: [MailchimpModule.forRoot(config)],
            }).compile();

            const client = mod.get<Mailchimp>(MAILCHIMP_TOKEN);
            expect(client).toBeDefined();
            expect(client).toBeInstanceOf(Mailchimp);
        });
    });

    describe('forRootAsync 1.0', () => {
        describe('when the `useFactory` option is used', () => {
            it('should provide the wpapi client', async () => {
                const mod = await Test.createTestingModule({
                    imports: [
                        MailchimpModule.forRootAsync({
                            useFactory: () => config,
                        }),
                    ],
                }).compile();

                const client = mod.get<Mailchimp>(MAILCHIMP_TOKEN);
                expect(client).toBeDefined();
                expect(client).toBeInstanceOf(Mailchimp);
            });
        });
    });

    describe('when the `useClass` option is used', () => {
        it('should provide the wpapi client', async () => {
            const mod = await Test.createTestingModule({
                imports: [
                    MailchimpModule.forRootAsync({
                        useClass: TestService,
                    }),
                ],
            }).compile();

            const client = mod.get<Mailchimp>(MAILCHIMP_TOKEN);
            expect(client).toBeDefined();
            expect(client).toBeInstanceOf(Mailchimp);
        });
    });

    describe('forRoot', () => {
        it('should be DynamicModule', () => {
            const dynamicModule = MailchimpModule.forRoot(config);

            expect(dynamicModule).toBeDefined();
        });

        it('should be DynamicModule', () => {
            const dynamicModule = MailchimpModule.forRootAsync({
                useFactory: () => config,
            });

            expect(dynamicModule).toBeDefined();
        });
    });
});
