"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibElement = void 0;
var SyntheticEventManager_js_1 = require("./SyntheticEventManager.js");
var LibElement = /** @class */ (function () {
    function LibElement(tagName, optionals) {
        this.element = this.toHTMLElement(tagName, optionals);
    }
    LibElement.prototype.addEventListener = function (event, listener, options) {
        SyntheticEventManager_js_1.SyntheticEventSingleton.addEventListener(event, listener, this.element, options);
    };
    LibElement.prototype.removeEventListener = function (event, listener) {
        SyntheticEventManager_js_1.SyntheticEventSingleton.removeEventListener(event, listener);
    };
    LibElement.prototype.setAttribute = function (key, value) {
        this.element.setAttribute(key, value);
    };
    LibElement.prototype.removeAttribute = function (key) {
        this.element.removeAttribute(key);
    };
    LibElement.prototype.appendChild = function (node) {
        this.element.appendChild(node.element);
    };
    LibElement.prototype.replaceWith = function (node) {
        this.element.replaceWith(node.element);
    };
    LibElement.prototype.remove = function () {
        this.element.remove();
    };
    LibElement.prototype.insertAdjacentElement = function (where, node) {
        this.element.insertAdjacentElement(where, node.element);
    };
    LibElement.prototype.toHTMLElement = function (tagName, optionals) {
        var element = document.createElement(tagName);
        if (!optionals)
            return element;
        if (optionals.textContent !== undefined) {
            element.textContent = optionals.textContent;
        }
        if (optionals.attributes) {
            for (var _i = 0, _a = Object.entries(optionals.attributes); _i < _a.length; _i++) {
                var _b = _a[_i], attribute = _b[0], value = _b[1];
                element.setAttribute(attribute, value);
            }
        }
        if (optionals.eventListeners) {
            SyntheticEventManager_js_1.SyntheticEventSingleton.add(element, optionals.eventListeners);
        }
        return element;
    };
    LibElement.prototype.class = function (name) {
        this.element.className = name;
    };
    LibElement.prototype.getElement = function () {
        return this.element;
    };
    LibElement.prototype.getTextContent = function () {
        return this.element.textContent;
    };
    LibElement.prototype.setTextContent = function (text) {
        this.element.textContent = text;
    };
    return LibElement;
}());
exports.LibElement = LibElement;
