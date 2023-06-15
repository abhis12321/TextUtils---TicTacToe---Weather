import {useState} from 'react';

export default function App() {
    const [count , setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return(
        <>
            <h1>Counter together</h1>
            <MyButton count = {count} onClick = {handleClick}/>
            <MyButton count = {count} onClick = {handleClick}/>
            
        </>
    )
}

function MyButton({count , Clicked}) {
    <>
        <button onClick={Clicked}>clicks are {count}</button>
    </>
}