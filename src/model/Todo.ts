import { types } from 'mobx-state-tree'
import type { Instance } from 'mobx-state-tree'

const Todo = types
  .model('Todo', {
    id: types.identifierNumber,
    text: types.string,
    completed: types.optional(types.boolean, false)
  })
  .actions((self) => ({
    toggle() {
      self.completed = !self.completed
    },
    setText(newText: string) {
      self.text = newText
    }
  }))

export type ITodo = Instance<typeof Todo>
export default Todo
