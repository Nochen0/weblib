import type { EventTypes, LibElementEventListeners } from "./LibElement.js"

type SyntheticEventMap = {
  [k in EventTypes]?: {
    listener: EventListener
    target: HTMLElement
    options?: AddEventListenerOptions
  }[]
}

type SyntheticEventListeners = {
  event: EventTypes
  listener: EventListener
}[]

class SyntheticEventManager {
  private eventMap: SyntheticEventMap
  private syntheticEventListeners: SyntheticEventListeners

  constructor() {
    this.eventMap = {}
    this.syntheticEventListeners = []
  }

  public add(target: HTMLElement, libEventListeners: LibElementEventListeners) {
    for (let [event, listeners] of Object.entries(libEventListeners)) {
      if (!this.eventMap[event as EventTypes]?.length) {
        this.eventMap[event as EventTypes] = listeners.map((x) => ({
          ...x,
          target,
        }))
        this.addSyntheticEventListener(event as EventTypes)
      } else {
        this.eventMap[event as EventTypes] = this.eventMap[
          event as EventTypes
        ]!.concat(listeners.map((x) => ({ ...x, target })))
      }
    }
  }

  public addEventListener(
    event: EventTypes,
    listener: EventListener,
    target: HTMLElement,
    options?: EventListenerOptions,
  ) {
    if (this.eventMap[event]?.length) {
      this.eventMap[event].push({ listener, target, options })
    } else {
      this.eventMap[event] = [{ listener, target, options }]
      this.addSyntheticEventListener(event)
    }
  }

  private addSyntheticEventListener(event: EventTypes) {
    document.addEventListener(event, (e) => {
      const libTargets = this.eventMap[event]!.filter((x) => {
        return x.target === e.target
      })
      for (let libTarget of libTargets) {
        libTarget.listener(e)
      }
    })
  }

  private removeSyntheticEventListener(event: EventTypes) {
    const pair = this.syntheticEventListeners.find((x) => x.event === event)

    if (!pair) {
      console.error("No Synthetic Event Listener Found to Remove")
      return
    }

    document.removeEventListener(event, pair.listener)
  }

  public removeEventListener(
    event: keyof HTMLElementEventMap,
    listener: EventListener,
  ) {
    let newArr: SyntheticEventMap[typeof event] = []
    if (this.eventMap[event]?.length) {
      for (let x of this.eventMap[event]) {
        if (listener !== x.listener) newArr.push(x)
        else return
      }
    } else {
      console.error("No Event Listener Found to Remove")
      return
    }
    this.eventMap[event] = newArr
    if (newArr.length === 0) {
      this.removeSyntheticEventListener(event)
    }
  }
}

export const SyntheticEventSingleton = new SyntheticEventManager()
