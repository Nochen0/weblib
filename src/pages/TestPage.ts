import { type Component } from "../lib/Component.js"
import { Button, Div } from "../lib/CommonElements.js"
import Router from "../lib/Router.js"

type Props = {
  message: string
}

const TestPage: Component<Props> = ({ message }) => {
  return {
    elem: Div({
      textContent: "div1",
      attributes: { class: "firstdiv" },
      eventListeners: {
        click: [{ listener: () => console.log("div1 click") }],
      },
    }),
    children: [
      Div({
        textContent: message,
        eventListeners: {
          click: [{ listener: () => console.log("div2 click" + message) }],
        },
      }),
      Button({
        textContent: "Go to Homepage",
        eventListeners: {
          click: [
            {
              listener: () => Router.go("/"),
            },
          ],
        },
      }),
    ],
  }
}

export default TestPage
