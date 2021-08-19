import React from "react"
import './LoginInput.css'

const Input = (props) =>
    <div className='inputDiv'>
        <label htmlFor={props.name}>{props.labelTxt}
            <input className='loginInput' name={props.name} type={props.tipo} placeholder={props.holder} required />    
        </label>
        
    </div>

export default Input