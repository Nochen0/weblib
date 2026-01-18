import { SyntheticEventSingleton } from "./SyntheticEventManager.js"

export type LibElementAttributes = {
  [k: string]: string
}

export type LibElementEventListeners = {
  [k in keyof HTMLElementEventMap]?: {
    listener: EventListener
    options?: AddEventListenerOptions
  }[]
}

type LibElementOptionalType = {
  textContent?: string
  attributes?: LibElementAttributes
  eventListeners?: LibElementEventListeners
}

export type TagNameKeys = keyof HTMLElementTagNameMap
export type EventTypes = keyof HTMLElementEventMap

export class LibElement<T extends TagNameKeys> {
  private element: HTMLElementTagNameMap[T]
  constructor(tagName: T, optionals?: LibElementOptionalType) {
    this.element = this.toHTMLElement(tagName, optionals)
  }

  public addEventListener(
    event: EventTypes,
    listener: EventListener,
    options?: EventListenerOptions,
  ) {
    SyntheticEventSingleton.addEventListener(
      event,
      listener,
      this.element,
      options,
    )
  }

  public removeEventListener(
    event: keyof HTMLElementEventMap,
    listener: EventListener,
  ) {
    SyntheticEventSingleton.removeEventListener(event, listener)
  }

  public setAttribute(key: string, value: string) {
    this.element.setAttribute(key, value)
  }

  public removeAttribute(key: string) {
    this.element.removeAttribute(key)
  }

  private toHTMLElement(
    tagName: T,
    optionals?: LibElementOptionalType,
  ): HTMLElementTagNameMap[T] {
    const element = document.createElement(tagName)

    if (!optionals) return element

    if (optionals.textContent !== undefined) {
      element.textContent = optionals.textContent
    }

    if (optionals.attributes) {
      for (let [attribute, value] of Object.entries(optionals.attributes)) {
        element.setAttribute(attribute, value)
      }
    }

    if (optionals.eventListeners) {
      SyntheticEventSingleton.add(element, optionals.eventListeners)
    }

    return element
  }

  public class(name: string) {
    this.element.className = name
  }

  public getElement() {
    return this.element
  }

  public getTextContent() {
    return this.element.textContent
  }

  public setTextContent(text: string) {
    this.element.textContent = text
  }
}
