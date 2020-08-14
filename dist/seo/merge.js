"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pathAccess_1 = require("./util/pathAccess");
function mergeConfig(obj, paths) {
    const copy = {};
    for (const key in obj) {
        if (!paths.find(p => p[0] === key)) {
            copy[key] = obj[key];
        }
    }
    for (const path of paths) {
        const childObj = pathAccess_1.pathAccess(obj, path);
        if (childObj) {
            Object.assign(copy, childObj);
        }
    }
    return copy;
}
exports.mergeConfig = mergeConfig;
//# sourceMappingURL=merge.js.map