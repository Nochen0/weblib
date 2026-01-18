"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticEventSingleton = void 0;
var SyntheticEventManager = /** @class */ (function () {
    function SyntheticEventManager() {
        this.eventMap = {};
        this.syntheticEventListeners = [];
    }
    SyntheticEventManager.prototype.add = function (target, libEventListeners) {
        var _a;
        for (var _i = 0, _b = Object.entries(libEventListeners); _i < _b.length; _i++) {
            var _c = _b[_i], event_1 = _c[0], listeners = _c[1];
            if (!((_a = this.eventMap[event_1]) === null || _a === void 0 ? void 0 : _a.length)) {
                this.eventMap[event_1] = listeners.map(function (x) { return (__assign(__assign({}, x), { target: target })); });
                this.addSyntheticEventListener(event_1);
            }
            else {
                this.eventMap[event_1] = this.eventMap[event_1].concat(listeners.map(function (x) { return (__assign(__assign({}, x), { target: target })); }));
            }
        }
    };
    SyntheticEventManager.prototype.addEventListener = function (event, listener, target, options) {
        var _a;
        if ((_a = this.eventMap[event]) === null || _a === void 0 ? void 0 : _a.length) {
            this.eventMap[event].push({ listener: listener, target: target, options: options });
        }
        else {
            this.eventMap[event] = [{ listener: listener, target: target, options: options }];
            this.addSyntheticEventListener(event);
        }
    };
    SyntheticEventManager.prototype.addSyntheticEventListener = function (event) {
        var _this = this;
        document.addEventListener(event, function (e) {
            var libTargets = _this.eventMap[event].filter(function (x) {
                return x.target === e.target;
            });
            for (var _i = 0, libTargets_1 = libTargets; _i < libTargets_1.length; _i++) {
                var libTarget = libTargets_1[_i];
                libTarget.listener(e);
            }
        });
    };
    SyntheticEventManager.prototype.removeSyntheticEventListener = function (event) {
        var pair = this.syntheticEventListeners.find(function (x) { return x.event === event; });
        if (!pair) {
            console.error("No Synthetic Event Listener Found to Remove");
            return;
        }
        document.removeEventListener(event, pair.listener);
    };
    SyntheticEventManager.prototype.removeEventListener = function (event, listener) {
        var _a;
        var newArr = [];
        if ((_a = this.eventMap[event]) === null || _a === void 0 ? void 0 : _a.length) {
            for (var _i = 0, _b = this.eventMap[event]; _i < _b.length; _i++) {
                var x = _b[_i];
                if (listener !== x.listener)
                    newArr.push(x);
                else
                    return;
            }
        }
        else {
            console.error("No Event Listener Found to Remove");
            return;
        }
        this.eventMap[event] = newArr;
        if (newArr.length === 0) {
            this.removeSyntheticEventListener(event);
        }
    };
    return SyntheticEventManager;
}());
exports.SyntheticEventSingleton = new SyntheticEventManager();
