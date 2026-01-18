"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonElements_js_1 = require("./CommonElements.js");
var Router_js_1 = require("./Router.js");
var DefaultErrorPage = function () {
    function handleLink() {
        Router_js_1.default.go("/");
    }
    return {
        elem: (0, CommonElements_js_1.Div)(),
        children: [
            { elem: (0, CommonElements_js_1.Div)({ textContent: "Page not found 404" }) },
            {
                elem: (0, CommonElements_js_1.Button)({
                    textContent: "Home",
                    eventListeners: { click: [{ listener: handleLink }] },
                }),
            },
        ],
    };
};
exports.default = DefaultErrorPage;
