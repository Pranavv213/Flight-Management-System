import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import flightArray from './flightApi';
import S1 from './S1.js';
import S2 from './S2.js';
import App from './App.js';
function FlightDetails() {
    const history = useHistory()
    const arr=flightArray
    return (
        <div>
            {
                arr.map(x=>{
                    return (
                        <div>
                            <div class="card">
  <h5 class="card-header">Fly Asia</h5>
  <div class="card-body">
      <img style={{height:"100px"}} src="https://th.bing.com/th/id/R.032eba4da0b54d568f8b4203f60fb9c6?rik=d%2fAJgerf9A62qg&riu=http%3a%2f%2fwww.contactnumbers.in%2fwp-content%2fuploads%2f2015%2f04%2fIndiGo_airlines_Logo2.jpg&ehk=JkB2AETVW%2ftF1tUOzpgf728DfV4L63CEutBqzRI9N6g%3d&risl=&pid=ImgRaw&r=0"/>
    <h5 class="card-title">Name: {x.name}</h5>
    <h3>Place: {x.place}</h3>
   
    <button type="button" onClick={()=>{
        history.push(`/S2/${x.name}`)
    }} class="btn btn-primary">Check In</button>
  </div>

</div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FlightDetails
