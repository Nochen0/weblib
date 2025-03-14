import { ElementAttributes, LibElement, LibEventListener } from "./types.js"

type CreateElement = (
  tagName: keyof HTMLElementTagNameMap,
  textContent: string | null,
  attributes?: ElementAttributes,
  eventListeners?: {
    [key in keyof GlobalEventHandlersEventMap]?: LibEventListener[]
  }
) => HTMLElement

export const createElement: CreateElement = function (
  tagName,
  textContent,
  attributes,
  eventListeners
) {
  const element: HTMLElement = document.createElement(tagName)
  if (textContent) element.textContent = textContent
  if (attributes) {
    for (let attribute in attributes) {
      element.setAttribute(attribute, attributes[attribute])
    }
  }
  if (eventListeners) {
    for (let eventType in eventListeners) {
      eventListeners[eventType].forEach(
        ({ listener, options }: LibEventListener) =>
          element.addEventListener(eventType, listener, options)
      )
    }
  }
  return element
}

export function convertComponent({ parent, children }: LibElement) {
  return recursiveAppend(children || [], parent)
}

function recursiveAppend(children: LibElement[], _parent: HTMLElement) {
  children.forEach(({ parent, children }) => {
    _parent.appendChild(parent)
    if (children) {
      recursiveAppend(children, parent)
    }
  })
  return _parent
}
