import { type Component } from "./Component.js"
import DefaultErrorPage from "./DefaultErrorPage.js"
import Renderer from "./Renderer.js"

export type RouteDescriptions = {
  route: string
  page: Component | HTMLElement
}[]

class Router {
  private parent: HTMLElement
  private routeDescriptions: RouteDescriptions
  private errorPage: Component
  private renderer: Renderer

  constructor(renderer: Renderer) {
    this.parent = document.body
    this.errorPage = DefaultErrorPage
    this.routeDescriptions = []
    this.renderer = renderer
  }

  private match(pathname: string) {
    return (
      this.routeDescriptions.find(({ route }) => route === pathname)?.page ||
      this.errorPage
    )
  }

  private async init() {
    const pathname = location.pathname
    const page = this.match(pathname)

    if (page instanceof HTMLElement) {
      this.parent.appendChild(page)
    } else {
      this.parent.appendChild(this.renderer.buildTree(page()))
    }
  }

  setup(descriptions: RouteDescriptions, parent?: HTMLElement) {
    if (parent) {
      this.parent = parent
    }
    history.replaceState({ route: location.pathname }, "", location.pathname)
    addEventListener("popstate", (event: PopStateEvent) => {
      this.go(event.state.route, false)
    })
    this.routeDescriptions = descriptions
    this.init()
  }

  async go(route: string, addToHistory = true) {
    if (location.pathname === route) return

    if (addToHistory) {
      history.pushState({ route }, "", route)
    }

    const page = this.match(route)
    if (page instanceof HTMLElement) {
      this.parent.replaceChildren(page)
    } else {
      const builtElement = this.renderer.buildTree(page())

      this.routeDescriptions.find((x) => x.route === route)!.page = builtElement

      this.parent.replaceChildren(builtElement)
    }
    scrollX = 0
    scrollY = 0
  }
}

const renderer = new Renderer()
export default new Router(renderer)
