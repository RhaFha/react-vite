import { useEffect, useState } from "react"
import Swal from 'sweetalert2';

import NoControlado from "./components/NoControlado"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos"

// const initialStateTodos = [
//     {
//       id: 1,
//       title: 'Todo #01',
//       description: 'Descripcion #01',
//       state: true,
//       priority: false
//     },
//     {
//       id: 2,
//       title: 'Todo #02',
//       description: 'Descripcion #02',
//       state: false,
//       priority: false
//     },
//     {
//       id: 3,
//       title: 'Todo #03',
//       description: 'Descripcion #03',
//       state: true,
//       priority: true
//     },
//     {
//       id: 4,
//       title: 'Todo #04',
//       description: 'Descripcion #04',
//       state: true,
//       priority: false
//     },
//     {
//       id: 5,
//       title: 'Todo #05',
//       description: 'Descripcion #05',
//       state: false,
//       priority: false
//     }
// ]

const initialTodo = {
  title: '',
  description: '',
  state: false,
  priority: false
}

const initialStateTodos = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : [];console.log('inicial', initialStateTodos);

const App = () => {

  const [ todos, setTodos] = useState(initialStateTodos);
  const [todo, setTodo] = useState(initialTodo);

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const addTodo = todo => {
    setTodos( [ ...todos, todo]);
  }

  const deleteTodo = id => {

      Swal.fire({
        title: '¿Estas seguro de eliminar?',
        text: "Todavia puedes revestirlo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          const newTodos = todos.filter( todo => todo.id !== id);
          setTodos(newTodos);

          Swal.fire(
            'Eliminado!',
            'Eliminaste correctamente el registro',
            'success'
          )
        }
      })
  }

  const updateTodo = id => {
      const updateTodos = todos.map( todo => {
        if(todo.id === id){
          todo.state = !todo.state
        }
        return todo;
      });

      setTodos(updateTodos);

  }

  const orderTodos = (arrayTodos) => {

    if(arrayTodos.length !== 0){
      return arrayTodos.sort((a, b) => {
        if(a.priority === b.priority)return 0;
        if(a.priority === true ) return -1;
        if(a.priority === false ) return ;
      })
    }
    return arrayTodos;
    
  }

  return (
    <>
      <div className="container mb-2">
        <h1 className="my-5">Formularios</h1>
        {/*<NoControlado />*/}
        <Formulario 
          addTodo={addTodo}
          initialTodo={initialTodo}
          todo={todo}
          setTodo={setTodo}
        />
        <Todos 
          todos={orderTodos(todos)} 
          deleteTodo={deleteTodo} 
          updateTodo={updateTodo}
        />
      </div> 
    </>
  )
}
export default App
