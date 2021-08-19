import React from "react";
import './LoginBtn.css'
const InputBtn = (props) => 
    <div id='divBtn' className='inputDiv'>
        <input className='loginBtn' type="button" value={props.name} />
    </div>

export default InputBtn