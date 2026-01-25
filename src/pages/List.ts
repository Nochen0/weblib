import { Li, Ul } from "../lib/CommonElements"
import type { Component } from "../lib/Component"
import LibFor from "../lib/LibFor"
import State from "../lib/State"

type PokeRes = {
  ability: {
    name: string
  }
}[]

async function wait(ms: number = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function loadPoke(pokeState: State<PokeRes>) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  const json = await res.json()

  pokeState.set(json.abilities)

  const res2 = await fetch("https://pokeapi.co/api/v2/pokemon/charizard")
  const json2 = await res2.json()

  await wait()

  pokeState.set(pokeState.get().concat(json2.abilities))
}

const List: Component = () => {
  const pokeState = new State<PokeRes>([])
  const ul = Ul()

  loadPoke(pokeState)

  return {
    elem: ul,
    children: LibFor(pokeState, ul, (x) => Li({ textContent: x.ability.name })),
  }
}

export default List
