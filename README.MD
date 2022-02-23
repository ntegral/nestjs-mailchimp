[![npm version](http://img.shields.io/npm/v/@ntegral/nestjs-mailchimp.svg?style=flat)](https://npmjs.org/package/@ntegral/nestjs-mailchimp "View this project on npm")
[![ISC license](http://img.shields.io/badge/license-ISC-brightgreen.svg)](http://opensource.org/licenses/ISC)


<p align="center">
  <h3 align="center">
    @ntegral/nestjs-mailchimp
  </h3>

  <p align="center">
    Provides an injectable mailchimp client to provide features to the Mailchimp API for nestjs projects
  </p>
</p>

## Table Of Contents

- [About](#about)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About

`@ntegral/nestjs-mailchimp` implements a module, `MailchimpModule`, which when imported into
your nestjs project provides a mailchimp client to any class that injects it. This
lets mailchimp be worked into your dependency injection workflow without having to
do any extra work outside of the initial setup.

## Installation

```bash
npm install --save @ntegral/nestjs-mailchimp mailchimp-api-v3
```

## Getting Started

The simplest way to use `@ntegral/nestjs-mailchimp` is to use `MailchimpModule.forRoot`

```typescript
import { Module } from '@nestjs-common';
import { MailchimpModule } from '@ntegral/nestjs-wpapi';

@Module({
  imports: [
    MailchimpModule.forRoot({
      apikey: 'mailchimp api key'
    }),
  ],
})
export class AppModule {}
```

You can then inject the Mailchimp client into any of your injectables by using a
custom decorator

```typescript
import { Injectable } from '@nestjs/common';
import { InjectMailchimp } from '@ntegral/nestjs-mailchimp';
import Mailchimp = require('mailchimp-api-v3');

@Injectable()
export class AppService {
  public constructor(@InjectMailchimp private readonly client: Client) {}
}
```

Asynchronous setup is also supported

```typescript
import { Module } from '@nestjs-common';
import { ConfigModule } from '../common/config/config.module';
import { ConfigService } from '../common/config/config.service';
import { MailchimpModule } from '@ntegral/nestjs-mailchimp';

@Module({
  imports: [
    MailchimpModule.forRootAsync({
      imports: [ConfigModule],  
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        apikey: 'some mailchimp api key'
      }),
    }),
  ],
})
export class AppModule {}
```

## Contributing

I would greatly appreciate any contributions to make this project better. Please
make sure to follow the below guidelines before getting your hands dirty.

1. Fork the repository
2. Create your branch (`git checkout -b my-branch`)
3. Commit any changes to your branch
4. Push your changes to your remote branch
5. Open a pull request

## License

Distributed under the ISC License. See `LICENSE` for more information.

## Acknowledgements

- [nestjs](https://nestjs.com)
- [mailchimp-api-v3](https://github.com/thorning/node-mailchimp)

Copyright &copy; 2020 Ntegral Inc.
