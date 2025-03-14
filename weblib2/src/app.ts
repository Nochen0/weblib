import Router from "./lib/Router.js"
import HomePage from "./pages/HomePage.js"

function App() {
  Router.setup([{ route: "/src/", page: HomePage }])
}

App()
