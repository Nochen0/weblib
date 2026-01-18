import { Button, Div } from "./CommonElements.js"
import type { Component } from "./Component.js"
import Router from "./Router.js"

const DefaultErrorPage: Component = () => {
  function handleLink() {
    Router.go("/")
  }

  return {
    elem: Div(),
    children: [
      { elem: Div({ textContent: "Page not found 404" }) },
      {
        elem: Button({
          textContent: "Home",
          eventListeners: { click: [{ listener: handleLink }] },
        }),
      },
    ],
  }
}

export default DefaultErrorPage
