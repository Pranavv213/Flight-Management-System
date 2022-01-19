import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Pay from './Pay'
import S1 from './S1.js';
import S2 from './S2.js';
import Header from './Header.js';
import Hello from './Hello.js';
import {incrementByAmount,changeString,insertArr,insertObj} from './store/contactSlice'
import {useSelector,useDispatch} from 'react-redux'
import flightArray from './flightApi';
import FlightDetails from './FlightDetails'
import 'bootstrap/dist/css/bootstrap.css';
import Seat from './Seat'
import './imgStyle.css'                                                 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

function App() {
  const string = useSelector((state) => state.counter.obj)
  const handleStuff = string==null ? (
      <>
        <img className="imgStyle" style={{marginLeft:'1020px'}} src=""/>
       
      </>
    ) : (
      <>
       
       <img className="imgStyle" style={{marginLeft:'1020px'}} src={string.imageUrl}/>
        
      </>
    );
  return (
  
      <Router>
       
<div  style={{backgroundColor:"black"}} className="App">
    
  
  
        <Link to="/">Home</Link>
        /
        <Link to="/Flight Details">Flight Details</Link>
        {handleStuff}
        {console.log( string)}
    
    
    <Switch>
              <Route exact path='/' component={Hello}></Route>
              <Route exact path='/seat/:flightName' component={Seat}></Route>
              <Route exact path='/S1/:flightName' component={S1}></Route>
              <Route exact path='/S2/:flightName' component={S2}></Route>
              <Route exact path='/Flight Details' component={FlightDetails}></Route>
              <Route exact path='/pay' component={Pay}></Route>
            </Switch>
            
            
</div>
      </Router>
  );
}

export default App;
