"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Component_js_1 = require("./lib/Component.js");
var Router_js_1 = require("./lib/Router.js");
var HomePage_js_1 = require("./pages/HomePage.js");
var TestPage_js_1 = require("./pages/TestPage.js");
function App() {
    var routes = [
        { route: "/", page: HomePage_js_1.default },
        {
            route: "/testpage",
            page: (0, Component_js_1.withProps)(TestPage_js_1.default, { message: "MessageProp" }),
        },
    ];
    Router_js_1.default.setup(routes, document.body);
}
App();
