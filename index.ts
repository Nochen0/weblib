import.meta.hot.accept()
import spa from "./src/index.html"

const server = Bun.serve({
  routes: {
    "/*": spa,
  },
  development: {
    hmr: true,
  },
  port: 3000,
})

console.log(server.url.toString())
