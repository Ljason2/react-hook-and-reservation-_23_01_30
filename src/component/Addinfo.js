import { BiTrash } from "react-icons/bi";



function AddInfo({appointment,onDelectAppoint}){
    return(
        <li>
        <dl>
        <dt>{appointment.petName}</dt>
        <dd>
            <dfn>예약자명</dfn>
            {appointment.ownerName}
        </dd>
        <dd className="desc">{appointment.aptNotes}</dd>
        <dd className="date">{appointment.aptDate}</dd>
        </dl>
        <button 
        onClick={()=>
            onDelectAppoint(appointment.id)
        }
        type="button"><BiTrash /></button>
        </li>
    )
}


export default AddInfo;