import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {incrementByAmount,changeString,insertArr,insertObj,insertPrice} from './store/contactSlice'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory,useParams} from 'react-router-dom'


function Seat() {
    const {flightName} = useParams();
    const history = useHistory();
    const [idx,setIdx]=useState(0)
    const arr = useSelector((state) => state.counter.arr)
    const price = useSelector((state) => state.counter.price)
    const dispatch = useDispatch();
    return (
        <div>
                    
                 
           <br></br>
           <h5 style={{color: 'white'}}>❌unbooked</h5>
           <br></br>
           <h5 style={{color: 'white'}}>☑ already booked</h5>
           <br></br>
           <h5 style={{color: 'white'}}>✅ selected</h5>
           <br></br>
           <button type="button" onClick={()=>{
                arr.map(x=>{
                    if(x.val=="✅")
                    {
                        
                        dispatch(insertArr({id: x.id, val:'☑',flightName: x.flightName}))
                    }
                })

               history.push(`/pay`)
           }} class="btn btn-primary">Save</button>
           <br></br>
                {arr.map(x=>{
                if(x.id%5!=0 && x.flightName==flightName )
                {
                return(
                    <button onClick={()=>{
                        if(x.val!="☑")
                        {
                        dispatch(insertArr({id: x.id, val:"✅", flightName: flightName}))
                        dispatch(insertPrice(price+10))
                        }
                        {console.log(arr)}
                    }}>{arr[x.id].val}</button>
                )
                }
                else{
                    return(
                        <br></br>
                    )
                }
                
            })}
           
           
          
           
               
            
        </div>
    )
}

export default Seat
