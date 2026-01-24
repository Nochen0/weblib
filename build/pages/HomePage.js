"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonElements_js_1 = require("../lib/CommonElements.js");
var Router_js_1 = require("../lib/Router.js");
var List_js_1 = require("./List.js");
var HomePage = function () {
    return {
        elem: (0, CommonElements_js_1.Div)({ textContent: "Home Div", attributes: { class: "homediv" } }),
        children: [
            (0, CommonElements_js_1.Button)({
                textContent: "Go to Test",
                eventListeners: { click: [{ listener: function () { return Router_js_1.default.go("/testpage"); } }] },
            }),
            (0, List_js_1.default)(),
        ],
    };
};
exports.default = HomePage;
