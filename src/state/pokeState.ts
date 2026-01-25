import State from "../lib/State"

type PokeRes = {
  ability: {
    name: string
  }
}[]

const pokeState = new State<PokeRes>([])

export default pokeState
