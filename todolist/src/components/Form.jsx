export function Form(props) {

    function inputTodoListHandler(e) {
        props.setInputTodoList(e.target.value);
    }
    function buttonTodoHandler(e) {
        e.preventDefault();
        if (!props.inputTodoList) return;

        props.setTodoList(
            [
                ...props.todoList,
                {
                    taskCompleted: false,
                    taskDescription: props.inputTodoList,
                    taskId: Math.random() * 100,
                },
            ]
        )
        props.setInputTodoList('');
    }
    function statusHandler(e) {
        props.setStatus(e.target.value)
    }

    return (
        <form>
            <input
                type="text"
                className="todo-input"
                onChange={inputTodoListHandler}
                value={props.inputTodoList}
            />
            <button
                className="todo-button"
                type="submit"
                onClick={buttonTodoHandler}
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}