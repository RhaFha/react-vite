import { useRef } from "react";



const NoControlado = () => {

    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //capturar lso datos
        const data = new FormData(form.current);
        const { title, description, state } = Object.fromEntries([...data.entries()]);

        console.log(title, description, state)

        //validar los datos
        if(!title.trim())
            return console.log('Llenar el titulo')
        if(!description.trim())
            return console.log('Llenar la descripcion')
        if(state === '')
            return console.log('Llenar el titulo')

        //enviar los datos
    }

    return (
        <form onSubmit={handleSubmit} ref={form}>

            <input 
                type='text' 
                placeholder="Ingrese todo"
                className="form-control mb-2"
                name="title"
            />
            <textarea 
            className="form-control mb-2" 
            placeholder="Ingrese description"
            name='description'
            />
            <select 
                className="form-select mb-2"
                name="state"
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button 
                type="submit"
                className="btn btn-primary"
            >Procesar</button>

        </form>
    )
}

export default NoControlado;