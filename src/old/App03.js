import { useEffect } from "react";
import { useState} from"react";
function App03(){
    const [count,setCount] =useState(0);
    const [minus,setMinus] =useState(0);

    // useEffect(()=>{console.log(`count ${count}`)},[count]);
    // useEffect(()=>{console.log(`minus ${minus}`)},[minus]);

    useEffect(()=> {console.log(`plus ${count} : ${minus}`)},[count,minus])

    return(
        <div>
            <h1>{count} , {minus}</h1>
            <button onClick={()=> setCount(()=> count + 1)}>first</button>
            <button onClick={()=> setMinus(()=> minus - 1)}>second</button>
        </div>
    )
}




export default App03;
