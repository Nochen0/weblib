import { createElement } from "./lib.js";
function createElementDecorator(tagName) {
    return function (...args) {
        return createElement(tagName, ...args);
    };
}
export const Div = createElementDecorator("div");
export const Button = createElementDecorator("button");
export const Header = createElementDecorator("header");
export const Li = createElementDecorator("li");
export const Ul = createElementDecorator("ul");
export const P = createElementDecorator("p");
export const H1 = createElementDecorator("h1");
export const H2 = createElementDecorator("h2");
export const Img = createElementDecorator("img");
export const Input = createElementDecorator("input");
