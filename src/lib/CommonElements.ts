import {
  LibElement,
  type LibElementAttributes,
  type LibElementEventListeners,
  type TagNameKeys,
} from "./LibElement.js"

function createSpecificLibElement<T extends TagNameKeys>(tagName: T) {
  return function (optionals?: {
    textContent?: string
    attributes?: LibElementAttributes
    eventListeners?: LibElementEventListeners
  }) {
    return new LibElement<T>(tagName, optionals)
  }
}

export const Div = createSpecificLibElement("div")
export const Button = createSpecificLibElement("button")
export const Ul = createSpecificLibElement("ul")
export const Li = createSpecificLibElement("li")
