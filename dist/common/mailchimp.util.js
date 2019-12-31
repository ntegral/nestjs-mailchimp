"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mailchimp = require("mailchimp-api-v3");
function createMailchimpClient(options) {
    const client = new Mailchimp(options.apikey);
    return client;
}
exports.createMailchimpClient = createMailchimpClient;
