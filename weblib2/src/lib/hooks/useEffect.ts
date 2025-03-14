import { GetState } from "../types.js"

export default function useEffect(
  effect: (state: any) => void,
  states: GetState<any>[]
) {
  states.forEach((state) => state.subscriptions.push(effect))
}
