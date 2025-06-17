import { types } from 'mobx-state-tree'
import type { Instance } from 'mobx-state-tree'
import Todo from './Todo'

const TodoList = types
  .model('TodoList', {
    todos: types.array(Todo)
  })
  .actions((self) => ({
    addTodo(text: string) {
      const id = self.todos.length
        ? self.todos[self.todos.length - 1].id + 1
        : 1
      self.todos.push({ id, text, completed: false })
    },
    removeTodo(id: number) {
      self.todos.replace(self.todos.filter((todo) => todo.id !== id))
    }
  }))

export type ITodoList = Instance<typeof TodoList>
export default TodoList
