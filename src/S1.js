import React,{useState} from 'react'
import {incrementByAmount,changeString,insertArr,insertPeopleArr} from './store/contactSlice'
import {useSelector,useDispatch} from 'react-redux'
import { useHistory,useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'

function S1() {
    const history = useHistory();
    const {flightName}=useParams();
    const dispatch=useDispatch();
    const [name,setName]=useState("");
    const [mobile,setMobile]=useState(""); 
    const arr = useSelector((state) => state.counter.peopleArr)
      return(
         <div style={{backgroundColor:"black"}}>
           <div class="card">
  <div class="card-body">
  <TextField placeholder="Name" value={name} onChange={(e)=>{
    setName(e.target.value)
  }} type="text" variant="outlined" 
      label="Name" color="secondary"/>
     
  </div>
  <div class="card-body">
     <TextField placeholder="Mobile Number" value={mobile} onChange={(e)=>{
    setMobile(e.target.value)
  }} type="number" variant="outlined" 
      label="Mobile Number" color="secondary"/>
  </div>
  <br></br>
  <br></br>
  <button type="button" onClick={()=>{
    dispatch(insertPeopleArr([...arr,{name: name, mobile: mobile ,flightName: flightName}]))
    history.push(`/seat/${flightName}`)
  }
  
  } class="btn btn-primary">Proceed</button>
  {console.log(arr)}
</div>
            
         </div>
      )
   
}

export default S1
