const MyButton = ({handleUser}) => {
    return ( 
        <button
        onClick={() => handleUser('hola')}
        >Soy un boton</button>
    )
}

export default MyButton;