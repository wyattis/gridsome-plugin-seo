"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(api, options) {
    console.log('gridsome-plugin-seo', options);
}
exports.default = default_1;
exports.defaultOptions = () => ({
    output: {
        openGraph: true,
        twitter: true,
        robots: false
    },
    data: {
        type: 'website'
    },
    extract: {
        default: {
            title: 'title',
            keywords: 'keywords',
            description: 'description',
            image: 'image',
            url: 'path'
        }
    }
});
//# sourceMappingURL=gridsome.server.js.map