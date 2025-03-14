import { GetState } from "../types.js"

type SetState<T> = (newValue: T, ignore?: boolean) => void

function useState<T>(initialValue: T): [GetState<T>, SetState<T>] {
  let state = initialValue

  const getState: GetState<T> = function () {
    return state
  }

  getState.subscriptions = []

  function setState(newValue: T, ignore: boolean = false) {
    state = newValue
    if (!ignore) {
      getState.subscriptions.forEach((effect) => effect(state))
    }
  }

  return [getState, setState]
}

export default useState
