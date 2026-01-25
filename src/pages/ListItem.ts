import { Li } from "../lib/CommonElements"
import type { LiComponent } from "../lib/Component"
import pokeState from "../state/pokeState"

type Props = {
  name: string
}

const ListItem: LiComponent<Props> = ({ name }) => {
  return Li({
    textContent: name,
    eventListeners: {
      click: [
        {
          listener: () => {
            pokeState.set(
              pokeState.get().filter((x) => x.ability.name !== name),
            )
          },
        },
      ],
    },
  })
}

export default ListItem
