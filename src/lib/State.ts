type Effect<T> = (state: T) => void

class State<T> {
  private state: T
  private effects: Effect<T>[]

  constructor(initialValue: T) {
    this.state = initialValue
    this.effects = []
  }

  public set(newValue: T) {
    this.state = newValue
    this.effects.forEach((f) => f(this.state))
  }

  public get() {
    return this.state
  }

  public addEffect(f: Effect<T>) {
    this.effects.push(f)
  }
}

export default State
