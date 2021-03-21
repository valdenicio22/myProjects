import { Task } from "./Task";

export function TodoList({ todoList, setTodoList }) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todoList.map(task => (
                    <Task
                        key={task.taskId}
                        task={task}
                        todoList={todoList}
                        setTodoList={setTodoList}
                    />)
                )}
            </ul>
        </div>
    );
}