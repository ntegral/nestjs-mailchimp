"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mailchimp_constants_1 = require("./mailchimp.constants");
function InjectMailchimp() {
    return common_1.Inject(mailchimp_constants_1.MAILCHIMP_TOKEN);
}
exports.InjectMailchimp = InjectMailchimp;
