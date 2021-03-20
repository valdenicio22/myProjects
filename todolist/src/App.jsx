import { Form } from './components/Form'
import { TodoList } from './components/TodoList'
import './App.css'

export function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo list - React</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  )
}