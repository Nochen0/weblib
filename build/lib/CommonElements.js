"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Li = exports.Ul = exports.Button = exports.Div = void 0;
var LibElement_js_1 = require("./LibElement.js");
function createSpecificLibElement(tagName) {
    return function (optionals) {
        return new LibElement_js_1.LibElement(tagName, optionals);
    };
}
exports.Div = createSpecificLibElement("div");
exports.Button = createSpecificLibElement("button");
exports.Ul = createSpecificLibElement("ul");
exports.Li = createSpecificLibElement("li");
