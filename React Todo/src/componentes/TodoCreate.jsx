import { useState } from "react";

const TodoCreate = ({ handleCreate }) => {
    const initialTodo = {
        title: "",
        completed: false,
    };
    const [todo, setTodo] = useState(initialTodo);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);

        if (todo.title.trim().length > 0) {
            if (handleCreate(todo)) {
                setTodo(initialTodo);
                console.log("Se guardo corrctamente");
            }

            console.log("Error al intentar guardar, intente de nuevo");
        }

        console.log("El titulo no puede estar vacio");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full text-gray-400 outline-none dark:bg-gray-800"
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
        </form>
    );
};

export default TodoCreate;
