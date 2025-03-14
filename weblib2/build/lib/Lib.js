export const createElement = function (tagName, textContent, attributes, eventListeners) {
    const element = document.createElement(tagName);
    if (textContent)
        element.textContent = textContent;
    if (attributes) {
        for (let attribute in attributes) {
            element.setAttribute(attribute, attributes[attribute]);
        }
    }
    if (eventListeners) {
        for (let eventType in eventListeners) {
            eventListeners[eventType].forEach(({ listener, options }) => element.addEventListener(eventType, listener, options));
        }
    }
    return element;
};
export function convertComponent({ parent, children }) {
    return recursiveAppend(children || [], parent);
}
function recursiveAppend(children, _parent) {
    children.forEach(({ parent, children }) => {
        _parent.appendChild(parent);
        if (children) {
            recursiveAppend(children, parent);
        }
    });
    return _parent;
}
