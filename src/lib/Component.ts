import type { LibElement, TagNameKeys } from "./LibElement"

export type ComponentTree = {
  elem: LibElement<TagNameKeys>
  children?: (ComponentTree | LibElement<TagNameKeys>)[]
}

export type Component<T = void> = T extends void
  ? {
      (): ComponentTree
    }
  : {
      (props: T): ComponentTree
    }

export type LiComponent<T = void> = T extends void
  ? () => LibElement<"li">
  : (props: T) => LibElement<"li">

export function withProps<T>(component: Component<T>, props: T) {
  return () => component(props)
}
