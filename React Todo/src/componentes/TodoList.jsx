import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleUpdate, handleRemove }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
            {todos.map((todo) => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    handleUpdate={handleUpdate}
                    handleRemove={handleRemove}
                />
            ))}
        </div>
    );
};

export default TodoList;
