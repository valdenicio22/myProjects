export function Task({ task, todoList, setTodoList }) {

    function deleteHandler() {
        setTodoList(todoList.filter(el => (el.taskId !== task.taskId)))
    }
    function completeHandler() {
        setTodoList(todoList.map(item => {
            if (item.taskId === task.taskId) {
                return {
                    ...item,
                    taskCompleted: !item.taskCompleted,
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${task.taskCompleted ? 'completed' : ''}`}> {task.taskDescription} </li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}