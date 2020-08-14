"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VideoType;
(function (VideoType) {
    VideoType["MOVIE"] = "movie";
    VideoType["EPISODE"] = "episode";
    VideoType["TV_SHOW"] = "tv_show";
    VideoType["OTHER"] = "other";
})(VideoType || (VideoType = {}));
var NodeType;
(function (NodeType) {
    NodeType["WEB"] = "website";
    NodeType["VIDEO"] = "video";
    NodeType["IMAGE"] = "image"; // twitter: image, og: image
})(NodeType = exports.NodeType || (exports.NodeType = {}));
exports.sharedKeys = Object.freeze(['title', 'description', 'image']);
//# sourceMappingURL=types.js.map