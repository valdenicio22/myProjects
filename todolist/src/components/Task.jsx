export function Task({ task, todoList, setTodoList }) {

    function deleteHandler() {
        setTodoList(todoList.filter(el => (el.taskId !== task.taskId)))
    }

    return (
        <div className="todo">
            <li className="todo-item"> {task.taskDescription} </li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}