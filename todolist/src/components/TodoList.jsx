import { Task } from "./Task";

export function TodoList({ todoList, setTodoList, filteredTodoList }) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodoList.map(task => (
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