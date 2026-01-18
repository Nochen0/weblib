"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LibElement_js_1 = require("./LibElement.js");
var Renderer = /** @class */ (function () {
    function Renderer() {
    }
    Renderer.prototype.buildTree = function (tree) {
        var _a;
        if (tree instanceof LibElement_js_1.LibElement) {
            return tree.getElement();
        }
        if (!((_a = tree.children) === null || _a === void 0 ? void 0 : _a.length)) {
            return tree.elem.getElement();
        }
        else {
            var parent_1 = tree.elem.getElement();
            for (var _i = 0, _b = tree.children; _i < _b.length; _i++) {
                var subTree = _b[_i];
                parent_1.appendChild(this.buildTree(subTree));
            }
            return parent_1;
        }
    };
    return Renderer;
}());
exports.default = Renderer;
