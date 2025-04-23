import DefaultErrorPage from "./DefaultErrorPage.js"
import { convertComponent } from "./Lib.js"
import { LibComponent } from "./types.js"

type RouteDescriptions = {
  route: string
  page: LibComponent
}[]

type ConvertedRouteDescriptions = (Omit<RouteDescriptions[number], "page"> & {
  page: HTMLElement | LibComponent
})[]

class Router {
  private parent: HTMLElement
  private routeDescriptions: ConvertedRouteDescriptions
  private errorPage: HTMLElement

  constructor() {
    this.parent = document.body
    this.errorPage = convertComponent(DefaultErrorPage())
    this.routeDescriptions = []
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
      const convertedElement = convertComponent(page())
      this.routeDescriptions[
        this.routeDescriptions.findIndex(({ route }) => route === pathname)
      ].page = convertedElement
      this.parent.appendChild(convertedElement)
    }
  }

  setup(descriptions: RouteDescriptions, parent?: HTMLElement) {
    if (parent) {
      this.parent = parent
    }
    history.replaceState({ route: location.pathname }, "", location.pathname)
    addEventListener(
      "popstate",
      function (this: InstanceType<typeof Router>, event: PopStateEvent) {
        this.go(event.state.route, false)
      }.bind(this)
    )
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
      const convertedElement = convertComponent(page())
      this.routeDescriptions[
        this.routeDescriptions.findIndex(
          ({ route: _route }) => _route === route
        )
      ].page = convertedElement
      this.parent.replaceChildren(convertedElement)
    }
    scrollX = 0
    scrollY = 0
  }
}

export default new Router()
