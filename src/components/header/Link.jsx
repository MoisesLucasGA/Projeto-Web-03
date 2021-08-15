import React from "react"
import './Link.css'

const Link = props => 
    <a className='headerLink' href={props.link}>
        {props.nome}
    </a>

export default Link