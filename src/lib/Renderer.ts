import { type ComponentTree } from "./Component.js"
import { LibElement, type TagNameKeys } from "./LibElement.js"

export default class Renderer {
  public buildTree(tree: ComponentTree | LibElement<TagNameKeys>) {
    if (tree instanceof LibElement) {
      return tree.getElement()
    }

    if (!tree.children?.length) {
      return tree.elem.getElement()
    } else {
      const parent = tree.elem.getElement()
      for (let subTree of tree.children) {
        parent.appendChild(this.buildTree(subTree))
      }
      return parent
    }
  }
}
