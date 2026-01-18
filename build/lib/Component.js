"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withProps = withProps;
function withProps(component, props) {
    return function () { return component(props); };
}
