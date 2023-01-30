import AddAppointment from "./component/AddAppointment"
import Addinfo from './component/Addinfo'
import Search from "./component/Search"
import { BiArch } from "react-icons/bi";
import { useCallback, useEffect, useState } from "react";





function App(){
    const [appointList,setAppointList]=useState([]);
    const [query,setQuery]=useState("");
    const [sortBy,setSortBy]=useState("petName");


    const filterAppointments = appointList.filter(
        (item)=> { return (item.petName.toLowerCase().includes(query.toLowerCase()) || 
                            item.ownerName.toLowerCase().includes(query.toLowerCase()) || 
                            item.aptNotes.toLowerCase().includes(query.toLowerCase() )
                            )})
    .sort((a,b)=> (a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 : 1))
    

    const fetchData = useCallback(
        ()=>{
            fetch(`./data.json`)
            .then(response => response.json())
            .then(data=> setAppointList(data))
        },[]
    );


    useEffect(
        fetchData,[fetchData]
    )
    
    // network ->무한반복 ->sources->pause


        
    return(
        <article>
            <h3><BiArch />예약시스템</h3>
            <AddAppointment
            onSendAppointment = {
            myAppointment=> setAppointList([...appointList,myAppointment])
            }
            lastId={
            appointList.reduce((max, item) => Number(item.id) > max ? Number(item.id) :max,1)
            }
            />
            <Search 
            query={query}
            onQueryChange={ myQuery=> setQuery(myQuery)}
            sortBy={sortBy}
            onSortChange={ (mySortBy)=>setSortBy(mySortBy)}
            />

            <div id="list">
        <ul>
            {
            filterAppointments.map(
            (appointment)=>
             (<Addinfo key={appointment.id} 
            appointment={appointment}
            onDelectAppoint ={ appointmentId =>
                setAppointList(
                    filterAppointments.filter(
                        appointment=> appointment.id !== appointmentId
                    )
                )
            }
            />
            ))
            }
        </ul>
            </div>
        </article>


    )
}



export default App;