import Todo from "./Todo";

const Todos = ({todos, deleteTodo, updateTodo, updateFormTodo}) => {
    return(
        <div className="mt-4">
            <h1 className="text-center">Todos</h1>
            <ul className="list-group">
                {   
                     todos.length === 0 ? 
                        <li className="list-group-item text-center">No hay registros existentes</li> 
                     :
                        todos.map( todo => (
                            <Todo 
                                key={todo.id} 
                                todo={todo}
                                deleteTodo={deleteTodo}
                                updateTodo={updateTodo}
                                updateFormTodo={updateFormTodo}
                            />
                        ))
                }

            </ul>
        </div>
    )
}

export default Todos;