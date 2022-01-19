import React,{useState} from 'react'
import { GoogleLogout } from 'react-google-login';
import  GoogleLogin from 'react-google-login'
import {incrementByAmount,changeString,insertArr,insertObj} from './store/contactSlice'
import {useSelector,useDispatch} from 'react-redux'
import FlightDetails from './FlightDetails'
import {useHistory} from 'react-router-dom'
import flightArray from './flightApi';
import  Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.css';
// npm install react-google-login


function Hello() {
  const responseGoogle = (response) => {
    // console.log(response);
    // console.log(response.profileObj);
    setResponseObject(response.profileObj)
    console.log((response.profileObj.imageUrl))

    dispatch(insertObj(response.profileObj));
    // history.push('/Flight Details')
   
// this function takes response as an argument , we dont have to make variable response, it is handled by reat-google-Login . Response is an array which contains an oobject known as profileObj. This object contains many info such as imageUrl
  }
  const string = useSelector((state) => state.counter.obj)
  const handleStuff = string==null ? (
    <>
    <h1 style={{color:"purple"}}>𝐀𝐈𝐑 𝐇𝐔𝐁</h1>
    
     <GoogleLogin clientId="873344276699-ujlc8kkem3dn1u65eerl5rlle5betov9.apps.googleusercontent.com" buttonText="Login"
                onSuccess={responseGoogle}
                onFaliure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                
        />
        <br></br>
     
     
      <img style={{height:"600px"}} src="https://cdn.dribbble.com/users/1081586/screenshots/3321346/flight_loading_vikas-singh.gif" class="d-block w-100"/>

     
    </>
  ) : (
    <>
     
     <h1 style={{color:"purple"}}>Welcome {string.givenName},</h1>
     <br></br>
     <Button style={{fontSize:24}} size="small" onClick={()=>{
     history.push('/Flight Details')
   }} variant='contained' color="primary">Continue</Button>
  <img style={{width:"100%"}} src="https://source.unsplash.com/1600x900/?aeroplane,flight"/>
    
      
    </>
  );
  
  const history=useHistory();
  
    const dispatch=useDispatch();
    const [responseObject,setResponseObject]=useState({imageUrl:""})
    // responseobject stores profileObj
    const [str,setStr]=useState("")
   
    return (
        <div>
          
             
        
        
        
      
      

        
        {/* <GoogleLogout
      clientId="873344276699-ujlc8kkem3dn1u65eerl5rlle5betov9.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={()=>{
          setResponseObject({imageUrl:""})
          setStr("logout successfully")

      }}
    >
    </GoogleLogout> */}
     
   {handleStuff}
        </div>
    )
}

export default Hello
