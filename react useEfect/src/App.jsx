import { useState } from 'react'
import { useFetch } from './useFetch';

const App = () => {

  const [count, setCount] = useState(0);

  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users');

  if(loading) return <h1>Cargando...</h1>
  if(error) return <h1>{error}</h1>

  return(

    <>
    <h1>Use effect</h1>
    <button onClick={() => setCount(count + 1)} > Counter: {count }</button>
    <ul>
      { 
        data.map( (user, index) => (
          <li key={user.id}> {user.name}</li>
        ))
      }
    </ul>
    </>

  )
}

export default App;
