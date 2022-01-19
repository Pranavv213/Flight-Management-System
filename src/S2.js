import React,{useState} from 'react'
import arr from './dataPeople.jsx'
import {incrementByAmount,changeString,insertArr,insertObj} from './store/contactSlice'
import 'bootstrap/dist/css/bootstrap.css';
import {useSelector,useDispatch} from 'react-redux'
import {useHistory,useParams} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
function S2() {
    const [search,setSearch]=useState("");
    const [searcharr,setSearcharr]=useState([]);
    const [filterarr,setFilterarr]=useState([]);
    const string = useSelector((state) => state.counter.obj)
   
    
    const arr = useSelector((state) => state.counter.peopleArr)
    const history = useHistory();
    const {flightName} = useParams();
    return (
        <div>
            <button type="button" onClick={()=>{
                history.push(`/S1/${flightName}`)
            }} class="btn btn-primary">BOOK A  SEAT NOW !!</button>
            <br></br>
            <div class="card">
                    
                    <div class="card-body">
                    <TextField placeholder="Search" value={search}  type="text" variant="outlined" onChange={(e)=>{
                        setSearch(e.target.value)
                        
                    }}
                    
                label="Search" color="secondary"/>
                        
                    </div>
                    </div>
                        
                    {arr.map(x=>{
                        if(search && x && x.name.toLowerCase().includes(search.toLowerCase()) && search!="" && x.flightName==flightName){
                
                
                return(
                    <div class="card">
                    <h5 class="card-header">name: {x.name}</h5>
                    <div class="card-body">
                        <h5 class="card-title">mobile: {x.mobile}</h5>
                        
                    </div>
                    </div>
                   
                )
                        }
                        else if(search=="" && x.flightName==flightName){

                            return(
                                <div class="card">
                                <h5 class="card-header">name: {x.name}</h5>
                                <div class="card-body">
                                    <h5 class="card-title">mobile: {x.mobile}</h5>
                                    {console.log(arr)}
                                </div>
                                </div>
                               
                            )
                            
                        }
                
                
                
            })}
        </div>
    )
}

export default S2
