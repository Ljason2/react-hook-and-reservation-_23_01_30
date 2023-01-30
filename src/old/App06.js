import { useEffect, useState } from "react"



function App06(){
    const[data,setData]=useState(null);
    useEffect(()=>{
        fetch(`./data.json`)
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    if(data){
        return (
            <pre>{JSON.stringify(data,null,2)}</pre>
        )
    }
}


export default App06;