"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function getOGType(config) {
    if (config.openGraph && config.openGraph.type) {
        return config.openGraph.type;
    }
    switch (config.type) {
        case types_1.NodeType.IMAGE:
            return 'image';
        case types_1.NodeType.VIDEO:
            return 'video';
        default:
            return 'website';
    }
}
function makeOpenGraph(config) {
    const meta = [{
            name: 'type',
            content: getOGType(config)
        }];
    for (const key of types_1.sharedKeys) {
        if (config[key]) {
            meta.push({
                name: `${key}`,
                content: config[key]
            });
        }
    }
    if (config.url) {
        meta.push({
            name: 'url',
            content: config.url
        });
    }
    // if (typeof res.image === 'string') {
    //   meta.push({
    //     name: 'og:image',
    //     content: res.image
    //   })
    // } else {
    //   // TODO: Insert OpenGraph image stuff
    // }
    // if (typeof res.video === 'string') {
    //   meta.push({
    //     name: 'og:video',
    //     content: res.video
    //   })
    // } else {
    //   // TODO: Insert OpenGraph video stuff
    // }
    return meta;
}
exports.makeOpenGraph = makeOpenGraph;
//# sourceMappingURL=makeOpenGraph.js.map