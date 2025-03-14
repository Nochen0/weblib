import DefaultErrorPage from "./DefaultErrorPage.js";
import { convertComponent } from "./Lib.js";
class Router {
    constructor() {
        this.parent = document.body;
        this.errorPage = convertComponent(DefaultErrorPage());
    }
    match(pathname) {
        var _a;
        return (((_a = this.routeDescriptions.find(({ route }) => route === pathname)) === null || _a === void 0 ? void 0 : _a.page) ||
            this.errorPage);
    }
    async init() {
        const pathname = location.pathname;
        const page = this.match(pathname);
        if (page instanceof HTMLElement) {
            this.parent.appendChild(page);
        }
        else {
            const convertedElement = convertComponent(page());
            this.routeDescriptions[this.routeDescriptions.findIndex(({ route }) => route === pathname)].page = convertedElement;
            this.parent.appendChild(convertedElement);
        }
    }
    setup(descriptions, parent) {
        if (parent) {
            this.parent = parent;
        }
        history.replaceState({ route: location.pathname }, "", location.pathname);
        addEventListener("popstate", function (event) {
            this.go(event.state.route, false);
        }.bind(this));
        this.routeDescriptions = descriptions;
        this.init();
    }
    async go(route, addToHistory = true) {
        if (location.pathname === route)
            return;
        if (addToHistory) {
            history.pushState({ route }, "", route);
        }
        const page = this.match(route);
        if (page instanceof HTMLElement) {
            this.parent.replaceChildren(page);
        }
        else {
            const convertedElement = convertComponent(page());
            this.routeDescriptions[this.routeDescriptions.findIndex(({ route: _route }) => _route === route)].page = convertedElement;
            this.parent.replaceChildren(convertedElement);
        }
        scrollX = 0;
        scrollY = 0;
    }
}
export default new Router();
