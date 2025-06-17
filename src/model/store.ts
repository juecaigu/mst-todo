import { onSnapshot } from 'mobx-state-tree'
import TodoList from './TodoList'

const store = TodoList.create({ todos: [] })

onSnapshot(store, (snapshot) => {
  console.log('快照：', snapshot)
})

export default store
