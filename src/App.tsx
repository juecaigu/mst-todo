import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import store from './model/store'
import { ITodo } from './model/Todo'

const TodoItem: React.FC<{ todo: ITodo }> = observer(({ todo }) => (
  <li>
    <input
      type='checkbox'
      checked={todo.completed}
      onChange={() => todo.toggle()}
    />
    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
    </span>
  </li>
))

const App: React.FC = observer(() => {
  const [text, setText] = useState('')
  console.log('ssss', store)

  const handleAdd = () => {
    if (text.trim()) {
      store.addTodo(text)
      setText('')
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <h1>Todo List</h1>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='添加新任务'
          style={{ flex: 1 }}
        />
        <button onClick={handleAdd}>添加</button>
      </div>
      <ul>
        {store.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
})

export default App
