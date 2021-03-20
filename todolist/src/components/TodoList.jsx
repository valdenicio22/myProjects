export function TodoList({ todoList }) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todoList.map((task) => (<li>{task}</li>))}
            </ul>

        </div>
    );
}