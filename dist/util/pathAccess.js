"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pathAccess(obj, path) {
    for (const k of path) {
        if (obj !== null && typeof obj === 'object' && k in obj) {
            obj = obj[k];
        }
        else {
            obj = undefined;
            break;
        }
    }
    return obj;
}
exports.pathAccess = pathAccess;
//# sourceMappingURL=pathAccess.js.map