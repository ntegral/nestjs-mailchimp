import { Inject } from '@nestjs/common';
import { MAILCHIMP_TOKEN } from './mailchimp.constants';

export function InjectMailchimp() {
    return Inject(MAILCHIMP_TOKEN);
}
