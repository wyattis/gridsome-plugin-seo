"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function getTwitterType(config) {
    if (config.twitter && config.twitter.type) {
        return config.twitter.type;
    }
    switch (config.type) {
        case types_1.NodeType.IMAGE:
            return 'summary_large_image';
        case types_1.NodeType.VIDEO:
            return 'player';
        default:
            return 'summary';
    }
}
function makeTwitterCard(config) {
    const meta = [{
            name: 'card',
            content: getTwitterType(config)
        }];
    for (const key of types_1.sharedKeys) {
        if (config[key]) {
            meta.push({
                name: key,
                content: config[key]
            });
        }
    }
    if (config.twitter) {
        for (const key of ['site', 'creator']) {
            if (config.twitter[key]) {
                meta.push({
                    name: key,
                    content: config.twitter[key]
                });
            }
        }
    }
    return meta;
}
exports.makeTwitterCard = makeTwitterCard;
//# sourceMappingURL=makeTwitterCard.js.map