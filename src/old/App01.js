import { useState } from "react";

function App01(){


    // const what =useState();
    // console.log(what)

const [title,setTitle] = useState('happy');
// const 이름=() =>{}
// function 이름 (){}
    return(
        <div>
            <h1> state : {title}</h1>
            {/* <button onClick={()=>{return 작업결과}}>first</button>
            <button onClick={()=>{return 작업결과}}>second</button> */}
            <button onClick={()=> setTitle('first')}>first</button>
            <button onClick={()=> setTitle('second')}>second</button>
        </div>
    )
}




export default App01;
