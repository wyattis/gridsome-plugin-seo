"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pathAccess_1 = require("./pathAccess");
function dotAccess(obj, key) {
    const parts = key.split('.');
    return pathAccess_1.pathAccess(obj, parts);
}
exports.dotAccess = dotAccess;
//# sourceMappingURL=dotAccess.js.map