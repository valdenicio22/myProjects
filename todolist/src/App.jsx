import { Header } from './components/Header'
import { Form } from './components/Form'
import { TodoList } from './components/TodoList'

import { useState, useEffect } from 'react';

import './App.css'

export function App() {

  const [inputTodoList, setInputTodoList] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodoList, setFilteredTodoList] = useState([]);

  useEffect(() => {
    if (status === 'completed') {
      setFilteredTodoList(todoList.filter(task => task.taskCompleted));
      return;
    }
    if (status === 'uncompleted') {
      setFilteredTodoList(todoList.filter(task => !task.taskCompleted));
      return;
    }
    setFilteredTodoList(todoList);
  }, [todoList, status])

  return (
    <div className="App">
      <Header />
      <Form
        inputTodoList={inputTodoList}
        setInputTodoList={setInputTodoList}
        todoList={todoList}
        setTodoList={setTodoList}
        setStatus={setStatus}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} filteredTodoList={filteredTodoList} />
    </div>
  )
}