import { useState } from "react";
import Swal from 'sweetalert2';

const Formulario = ({addTodo, initialTodo, todo, setTodo, updateAllTodo}) => {

    const [mensaje, setMensaje] = useState(false);

    const {title, description, state, priority} = todo;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if( !title.trim() || !description.trim() ){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Titulo y Descripción obligatorios',
              })
        }
            addTodo({ 
                ...todo, 
                id: Date.now(),
                state: state === 'completado'
            });

            setTodo(initialTodo);

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se guado correctamente',
                showConfirmButton: false,
                timer: 1500
              })

    }

    const handleUpdate = (e) => {
        e.preventDefault();
        
        if( !title.trim() || !description.trim() ){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Titulo y Descripción obligatorios',
              })
        }

        updateAllTodo({
                ...todo, 
                state: state === 'completado'
        })

        setTodo(initialTodo);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se actualizo correctamente',
            showConfirmButton: false,
            timer: 1500
            })

    }

    const handleChange = (e) => {
        //setTodo( { ...todo, priority: e.target.checked } )
        const {name, value, type, checked} = e.target

        setTodo({ 
            ...todo, 
            [name]: type === 'checkbox' ? checked : value
        })

    }

    const handleCancel = (e) => {
        e.preventDefault();
        setTodo(initialTodo);
    }

    const PintarError = () => (
        <div className="alert alert-danger">Todos los campos obligatorios</div>
      );

    return (
        
        <form onSubmit={todo.id ? handleUpdate : handleSubmit } >
             <div>{ mensaje && <PintarError /> }</div>
            <input 
                type='text' 
                placeholder="Ingrese todo"
                className="form-control mb-2"
                name="title"
                value={todo.title}
                // onChange={e => setTodo({...todo , title: e.target.value})}
                //onChange={e => setTodo( prev => ({...prev , title: e.target.value}) )}//Forma difente de hacerlo obteniendo el estado actual
                onChange={handleChange}
                />
            <textarea 
                className="form-control mb-2" 
                placeholder="Ingrese description"
                name='description'
                value={todo.description}
                // onChange={e => setTodo({...todo , description: e.target.value})}
                onChange={handleChange}
                />
            <div className="form-check">
                <input
                    type='checkbox'
                    name='priority'
                    className="form-check-input mb-2"
                    id='priority'
                    checked={todo.priority}
                    //onChange={e => setTodo( { ...todo, priority: e.target.checked } )}
                    onChange={handleChange}
                />
                <label htmlFor="priority">Prioridad</label>
            </div>
            <select 
                className="form-select mb-2"
                name="state"
                value={todo.state ? 'completado' : 'pendiente'}
                // onChange={e => setTodo({...todo , state: e.target.value})}
                onChange={handleChange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button 
                type="submit"
                className="btn btn-primary mx-2"
            >{todo.id ? 'Actualizar' : 'Agregar'}</button>
            <button 
                type="button"
                className="btn btn-danger"
                onClick={handleCancel}
            >Cancelar</button>
        </form>
    )
}

export default Formulario;