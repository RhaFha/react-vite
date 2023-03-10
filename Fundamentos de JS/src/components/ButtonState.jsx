import { useState } from "react";

const ButtonState = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    }

    return (
        <button onClick={handleClick}>buttonstate: {count}</button>
    )
}

export default ButtonState;