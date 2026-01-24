import type { LibElement } from "./LibElement"
import type State from "./State"

function LibFor<T>(
  state: State<T[]>,
  parent: LibElement<any>,
  mapF: (x: T) => LibElement<"li">,
) {
  let prevState = state.get()
  const list = prevState.map(mapF)

  state.addEffect((currentState) => {
    prevState.forEach((x, i) => {
      if (currentState[i] && currentState[i] !== x) {
        list[i]!.replaceWith(mapF(currentState[i]))
      } else if (!currentState[i]) {
        list[i]!.remove()
      }
    })

    if (currentState.length > prevState.length) {
      currentState.slice(prevState.length).forEach((x) => {
        const libElement = mapF(x)
        parent.appendChild(libElement)
        list.push(libElement)
      })
    }

    prevState = currentState
  })

  return list
}

export default LibFor
