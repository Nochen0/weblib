import { Button, Input, Li, Ul } from "../lib/Elements.js"
import { convertComponent } from "../lib/Lib.js"
import { LibComponent } from "../lib/types.js"

type ListItem = {
  name: string
  description: string
  id: number
}

function removeItem(this: HTMLElement, event: Event) {
  event.stopPropagation()
  this.remove()
}

const ListItemComponent: LibComponent<ListItem> = ({
  name,
  description,
  id,
}) => {
  const parent = Li(`${name}: ${description}`, { key: String(id) })

  return {
    parent,
    children: [
      {
        parent: Button(
          "remove",
          {},
          { click: [{ listener: removeItem.bind(parent) }] }
        ),
      },
    ],
  }
}

const HomePage: LibComponent = () => {
  const parent = Ul(null)
  const name = Input(null)
  const description = Input(null)
  ;(async function () {
    const req = await fetch("/mock.json")
    const resp: ListItem[] = await req.json()
    resp.forEach((item) => {
      parent.appendChild(convertComponent(ListItemComponent(item)))
    })
  })()

  function addItem() {
    parent.appendChild(
      convertComponent(
        ListItemComponent({
          name: name.value,
          description: description.value,
          id: Date.now(),
        })
      )
    )
  }

  return {
    parent,
    children: [
      { parent: name },
      { parent: description },
      { parent: Button("Add", {}, { click: [{ listener: addItem }] }) },
    ],
  }
}

export default HomePage
