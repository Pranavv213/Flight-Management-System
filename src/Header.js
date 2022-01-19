import React from 'react'
import {Link} from 'react-router-dom'
import {incrementByAmount,changeString,insertArr} from './store/contactSlice'
import {useSelector,useDispatch} from 'react-redux'
import './imgStyle.css'
function Header(props) {
    const string = useSelector((state) => state.counter.text)
    return (
        <div style={{backgroundColor:'black', height: '100px'}}>
            {/* <Link to="/S1">Home</Link> */}
           
            <img className="imgStyle" style={{marginLeft:'1020px'}} src={string}/>
        </div>
    )
}

export default Header
