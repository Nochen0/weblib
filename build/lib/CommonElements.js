"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.Div = void 0;
var LibElement_js_1 = require("./LibElement.js");
function createSpecificLibElement(tagName) {
    return function (optionals) {
        return new LibElement_js_1.LibElement(tagName, optionals);
    };
}
exports.Div = createSpecificLibElement("div");
exports.Button = createSpecificLibElement("button");
