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
    getLocalTodoList();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodoList();
  }, [todoList, status])

  const filterHandler = () => {
    if (status === 'completed') {
      setFilteredTodoList(todoList.filter(task => task.taskCompleted));
      return;
    }
    if (status === 'uncompleted') {
      setFilteredTodoList(todoList.filter(task => !task.taskCompleted));
      return;
    }
    setFilteredTodoList(todoList);
  }

  const saveLocalTodoList = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
  const getLocalTodoList = () => {
    if (localStorage.getItem("todoList") === null) {
      //localStorage.setItem("todoList", JSON.stringify([]));
    } else {
      let localTodoList = JSON.parse(localStorage.getItem("todoList"));
      setTodoList(localTodoList);
    }
  }

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