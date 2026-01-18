import { withProps } from "./lib/Component.js"
import Router, { type RouteDescriptions } from "./lib/Router.js"
import HomePage from "./pages/HomePage.js"
import TestPage from "./pages/TestPage.js"

function App() {
  const routes: RouteDescriptions = [
    { route: "/", page: HomePage },
    {
      route: "/testpage",
      page: withProps(TestPage, { message: "message1" }),
    },
  ]
  Router.setup(routes, document.body)
}

App()
