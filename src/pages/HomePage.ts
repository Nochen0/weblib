import { Button, Div } from "../lib/CommonElements.js"
import type { Component } from "../lib/Component.js"
import Router from "../lib/Router.js"

const HomePage: Component = () => {
  return {
    elem: Div({ textContent: "Home Div", attributes: { class: "homediv" } }),
    children: [
      Button({
        textContent: "Go to Test",
        eventListeners: { click: [{ listener: () => Router.go("/testpage") }] },
      }),
    ],
  }
}

export default HomePage
