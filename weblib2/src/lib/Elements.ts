import { createElement } from "./Lib.js"
import { ElementAttributes, LibEventListener } from "./types.js"

type CreateElementDecorator<T> = (
  textContent: string | null,
  attributes?: ElementAttributes,
  eventListeners?: {
    [key in keyof GlobalEventHandlersEventMap]?: LibEventListener[]
  }
) => T

function createElementDecorator<T extends HTMLElement>(
  tagName: keyof HTMLElementTagNameMap
): CreateElementDecorator<T> {
  return function (...args) {
    return createElement(tagName, ...args) as any
  }
}

export const Div = createElementDecorator<HTMLDivElement>("div")
export const Button = createElementDecorator<HTMLButtonElement>("button")
export const Header = createElementDecorator<HTMLElement>("header")
export const Li = createElementDecorator<HTMLLIElement>("li")
export const Ul = createElementDecorator<HTMLUListElement>("ul")
export const P = createElementDecorator<HTMLParagraphElement>("p")
export const H1 = createElementDecorator<HTMLHeadingElement>("h1")
export const H2 = createElementDecorator<HTMLHeadingElement>("h2")
export const Img = createElementDecorator<HTMLImageElement>("img")
export const Input = createElementDecorator<HTMLInputElement>("input")
