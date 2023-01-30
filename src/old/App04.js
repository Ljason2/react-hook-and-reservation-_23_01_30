

import {useState, useReducer} from 'react';

function App04(){

    // const [checked,setChecked] = useState(false);
    // const [checked,setChecked] = useReducer(실행문,초기값);
    // const [checked,setChecked] = useReducer(함수명,초기값);
    const [checked,setChecked] = useReducer((checked)=> !checked, false);

    return(
        <div>
            <input type="checkbox" 
            value={checked}
            onClick={()=> setChecked()} />
            <label>
                {checked ? "checked" : "체크가 안되었습니다"}
                {/* {`${checked}`} */}
            </label>
        </div>
    )
}




export default App04;
