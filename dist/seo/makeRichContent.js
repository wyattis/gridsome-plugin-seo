"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeOpenGraph_1 = require("./makeOpenGraph");
const makeTwitterCard_1 = require("./makeTwitterCard");
const defaultConfig = {
    robots: 'all'
};
function makeRichContent(config, flags = { openGraph: true, twitter: true }) {
    config = Object.assign({}, defaultConfig, config);
    const ogMeta = flags.openGraph ? makeOpenGraph_1.makeOpenGraph(config) : [];
    const twitterMeta = flags.twitter ? makeTwitterCard_1.makeTwitterCard(config) : [];
    // TODO: Filter twitter descriptions 
    let basicMeta = [];
    if (config.keywords) {
        basicMeta.push({
            name: 'keywords',
            content: config.keywords
        });
    }
    if (config.robots) {
        basicMeta.push({
            name: 'robots',
            content: config.robots
        });
    }
    const meta = basicMeta.concat(ogMeta.map(m => ({
        name: 'og:' + m.name,
        content: m.content
    })), twitterMeta.map(m => ({
        name: 'twitter:' + m.name,
        content: m.content
    })));
    return {
        meta
    };
}
exports.makeRichContent = makeRichContent;
//# sourceMappingURL=makeRichContent.js.map