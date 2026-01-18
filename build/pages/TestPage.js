"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonElements_js_1 = require("../lib/CommonElements.js");
var Router_js_1 = require("../lib/Router.js");
var TestPage = function (_a) {
    var message = _a.message;
    return {
        elem: (0, CommonElements_js_1.Div)({
            textContent: "div1",
            attributes: { class: "firstdiv" },
            eventListeners: {
                click: [{ listener: function () { return console.log("div1 click"); } }],
            },
        }),
        children: [
            (0, CommonElements_js_1.Div)({
                textContent: message,
                eventListeners: {
                    click: [{ listener: function () { return console.log("div4 click" + message); } }],
                },
            }),
            (0, CommonElements_js_1.Button)({
                textContent: "Go to Homepage",
                eventListeners: {
                    click: [
                        {
                            listener: function () { return Router_js_1.default.go("/"); },
                        },
                    ],
                },
            }),
        ],
    };
};
exports.default = TestPage;
