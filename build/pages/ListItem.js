"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonElements_1 = require("../lib/CommonElements");
var pokeState_1 = require("../state/pokeState");
var ListItem = function (_a) {
    var name = _a.name;
    return (0, CommonElements_1.Li)({
        textContent: name,
        eventListeners: {
            click: [
                {
                    listener: function () {
                        pokeState_1.default.set(pokeState_1.default.get().filter(function (x) { return x.ability.name !== name; }));
                    },
                },
            ],
        },
    });
};
exports.default = ListItem;
