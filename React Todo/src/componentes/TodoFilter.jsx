const TodoFilter = ({ changeFilter, filter }) => {
    const changeFilterTodo = (e) => {
        changeFilter(e.target.value);
    };

    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 dark:bg-gray-800 dark:text-gray-400">
                <button
                    className={
                        filter === "all"
                            ? "text-blue-600"
                            : "hover:text-blue-600"
                    }
                    onClick={() => changeFilter("all")}
                >
                    All
                </button>
                <button
                    className={
                        filter === "activate"
                            ? "text-blue-600"
                            : "hover:text-blue-600"
                    }
                    onClick={() => changeFilter("activate")}
                >
                    Activate
                </button>
                <button
                    className={
                        filter === "completed"
                            ? "text-blue-600"
                            : "hover:text-blue-600"
                    }
                    onClick={() => changeFilter("completed")}
                >
                    Complete
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
