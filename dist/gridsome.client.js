"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeRichContent_1 = require("./seo/makeRichContent");
function default_1(Vue, options, context) {
    console.log('gridsome-plugin-seo');
    console.log(Vue, options, context);
    Vue.mixin({
        methods: {
            makeSeoContent(data) {
                return makeRichContent_1.makeRichContent(data);
            }
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=gridsome.client.js.map