import ItemFruta from "./ItemFruta";

const ListFruts = ({frutas}) => {

    return (

        <ul>
        {
            frutas.map( (fruta, index) =>(
                <ItemFruta
                    key={index}
                    fruta={fruta}
                />
            ))
        }
    </ul>

    )
}

export default ListFruts;