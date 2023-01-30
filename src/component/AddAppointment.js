import { Fragment, useState } from 'react';
import {BiCalendarPlus} from 'react-icons/bi'
// ||  && 연산자 => 출력값
// ()=>{} 함수형, 함수형 => () => {}
// 컴포넌트 나누기
// 함수명, 이름없는 함수 변수  ->  react, component JSX 


function AddWrite({toggleForm,formData,setFromData,formPublish}){

    if(!toggleForm){return null }
 

    // if(!toggleForm || false){
    //     return null
    // }


    // if(!toggleForm && true){
    //     return null
    // }

    return(
        <Fragment>
<ul>
<li>
<label htmlFor="userName">집사명</label>
<input 
type="text" id="userName"
onChange={(event)=>{  
setFromData({...formData,ownerName:event.target.value})
}}
/>
</li>

<li>
<label htmlFor="userChildren">애기명</label>
<input 
type="text" id="userChildren"
onChange={(event)=>{  
    setFromData({...formData,petName:event.target.value})
}}    
/>

</li>

<li>
<label htmlFor="userDate">예약일</label>
<input type="date" id="userDate"
onChange={(event)=>{  
    setFromData({...formData,aptDate:event.target.value})
}}    

/>
</li>

<li>
<label htmlFor="userTime">예약시간</label>
<input type="time" id="userTime"
onChange={(event)=>{  
    setFromData({...formData,aptTime:event.target.value})
}}    

/>
</li>

<li>
<label htmlFor="userData">기타설명</label>
<textarea id="userData"
onChange={(event)=>{  
    setFromData({...formData,aptNotes:event.target.value})
}}    
></textarea>
</li>
</ul>

<p>
    <button type="submit"
    onClick={formPublish}
    >예약하기</button>
</p>
</Fragment>
    )
}




function AddAppointment({onSendAppointment, lastId}){

    // 비어있는 객체 ->reset
    const clearData={
    "petName": "",
    "ownerName": "",
    "aptNotes": "",
    "aptDate": ""
    }
    // state
const [toggleForm,setToggleForm]=useState(false);
const [formData,setFromData]=useState(clearData)
function formPublish(){
    // 합본 객체
    const appointmentInfo ={
        id: lastId + 1,
        petName: formData.petName,
        ownerName: formData.ownerName ,
        aptNotes:  formData.aptNotes,
        aptDate:  formData.aptDate + ' ' + formData.aptTime
    }
    // 데이터 보내기
    onSendAppointment(appointmentInfo)
    // reset
    setToggleForm(!toggleForm)
    setFromData(clearData)
}

return(
<div id="appoint">
<h4
onClick={()=> setToggleForm(!toggleForm)}
>
<BiCalendarPlus/>
예약하기</h4>
<AddWrite
toggleForm={toggleForm}
formData = {formData}
formPublish={formPublish}
setFromData={setFromData}
/>

</div>
    )
}

export default AddAppointment;