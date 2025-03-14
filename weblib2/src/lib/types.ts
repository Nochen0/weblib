export type LibElement = {
  parent: HTMLElement
  children?: LibElement[]
}

export type LibComponent<T = void> = (props: T) => LibElement

export type GetState<T> = {
  subscriptions: ((state: T) => void)[]
  (): T
}

export type ElementAttributes = {
  [key: string]: string
}

export type LibEventListener = {
  listener: EventListener
  options?: EventListenerOptions
}
