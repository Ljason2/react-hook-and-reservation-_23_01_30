import { useState } from "react";
import { BiSearch, BiCaretDown, BiCheckboxChecked } from "react-icons/bi";


function DropDown({toggleSort,sortBy,onSortChange}){

    if(!toggleSort){
       return null 
    }

    return(
        <ul>
        <li
        onClick={()=> onSortChange('petName')}
        >애기이름 
        {(sortBy === 'petName') && <BiCheckboxChecked />}
        </li>
        <li
        onClick={()=> onSortChange('ownerName')}
        >예약자명
        {(sortBy === 'ownerName') && <BiCheckboxChecked />}
        </li>
        <li
         onClick={()=> onSortChange('aptDate')}
        >날짜
        {(sortBy === 'aptDate') && <BiCheckboxChecked />}
        </li>
    </ul>
    )
}




function Search({query,onQueryChange,sortBy,onSortChange}){
    
    const [toggleSort,setToggleSort]=useState(false)

    return(
    <div id="search">
        <div>
        <BiSearch />
         <input
         value={query} 
         onChange={(event)=>{onQueryChange(event.target.value)}}
         type="text" placeholder="search"/>
        <button 
        onClick={()=> setToggleSort(!toggleSort)}
        type="button"><BiCaretDown /></button>
        <DropDown
        sortBy={sortBy}
        onSortChange={ mySort => onSortChange(mySort)}
        toggleSort={toggleSort}
        />
        </div>
    </div>
    )
}




export default Search;