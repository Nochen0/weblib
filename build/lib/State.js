"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var State = /** @class */ (function () {
    function State(initialValue) {
        this.state = initialValue;
        this.effects = [];
    }
    State.prototype.set = function (newValue) {
        var _this = this;
        this.state = newValue;
        this.effects.forEach(function (f) { return f(_this.state); });
    };
    State.prototype.get = function () {
        return this.state;
    };
    State.prototype.addEffect = function (f) {
        this.effects.push(f);
    };
    return State;
}());
exports.default = State;
