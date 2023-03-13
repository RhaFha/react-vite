import { useState, useEffect } from "react";
import Header from "./componentes/Header";
import TodoComputer from "./componentes/TodoComputer";
import TodoCreate from "./componentes/TodoCreate";
import TodoFilter from "./componentes/TodoFilter";
import TodoList from "./componentes/TodoList";

const initialTodos =
    localStorage.getItem("todos") !== null
        ? JSON.parse(localStorage.getItem("todos"))
        : [];

const App = () => {
    const [todos, setTodos] = useState(initialTodos);

    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleCreate = (todo) => {
        const newTodo = {
            id: Date(),
            title: todo.title,
            completed: todo.completed,
        };

        setTodos([...todos, newTodo]);

        return true;
    };

    const handleRemove = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleUpdate = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computerItemsLeft = todos.filter((todo) => !todo.completed).length;
    const clearItemsCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "activate":
                return todos.filter((todos) => !todos.completed);
            case "completed":
                return todos.filter((todos) => todos.completed);
            default:
                return todos;
        }
    };

    const changeFilter = (filter) => setFilter(filter);

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />

            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate handleCreate={handleCreate} />

                <TodoList
                    todos={filteredTodos()}
                    handleUpdate={handleUpdate}
                    handleRemove={handleRemove}
                />

                <TodoComputer
                    computerItemsLeft={computerItemsLeft}
                    clearItemsCompleted={clearItemsCompleted}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="mt-8 text-center dark:text-gray-400">
                Drag and Drog react order
            </footer>
        </div>
    );
};

export default App;