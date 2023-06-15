import {useState} from 'react';

function MyButton(){
    const [count , setCount] = useState(0);
    function clickHandler(){
        setCount(count+1);
    }

    return (
        <>
            <button onClick={clickHandler}>clicks count is {count}</button>
        </>
    )
}

export default function App(){
    return(
        <>
            <h1>Click to Flick</h1>
            <MyButton/>
        </>
    )
}