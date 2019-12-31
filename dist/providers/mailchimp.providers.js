"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
function createMailchimpProviders(options) {
    return {
        provide: common_1.MAILCHIMP_TOKEN,
        useValue: common_1.createMailchimpClient(options),
    };
}
exports.createMailchimpProviders = createMailchimpProviders;
