import React, {useState} from "react";
import imgUno from './assets/imagenes/paisaje.jpg';

import ButtonState from "./components/ButtonState";
import ListFruts from "./components/frutas/ListFruts";
import MyButton from "./components/MyButton";
import WelcomeText from "./components/WelcomeText";


const App = () =>{
    const [user, setUser] = useState(false);
    const frutas = ['🍎', '🥭', '🍓', '🍑'];

    const handleUser = (text) =>{
        console.log(`handleClick: ${text}`);
        setUser(!user);
    }

    return (
        <>
            <ButtonState />
            <h1 className="text-center">Hola soy React</h1>
            <img src={imgUno} alt='imagen de prueba' />
            <MyButton 
                handleUser={handleUser}
            />
        
            <WelcomeText user={user}/>
        
            <ListFruts 
                frutas={frutas}
            />
        </>
    
    )
}

export default App;