export function Form(props) {

    function inputTodoListHandler(e) {
        props.setInputTodoList(e.target.value);
    }
    function buttonTodoHandler(e) {
        e.preventDefault();
        props.setTodoList(
            [
                ...props.todoList,
                { ...task }
            ]
        )
    }
    const task = {
        taskCompleted: false,
        taskDescription: props.inputTodoList,
        taskID: Math.random() * 100,
    }
    console.log(task);
    console.log(props.todoList);

    return (
        <form>
            <input type="text" className="todo-input" onChange={inputTodoListHandler} />
            <button className="todo-button" type="submit" onClick={buttonTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}