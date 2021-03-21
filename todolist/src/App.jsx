import { Header } from './components/Header'
import { Form } from './components/Form'
import { TodoList } from './components/TodoList'

import { useState } from 'react';

import './App.css'

export function App() {

  const [inputTodoList, setInputTodoList] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form
        inputTodoList={inputTodoList}
        setInputTodoList={setInputTodoList}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  )
}