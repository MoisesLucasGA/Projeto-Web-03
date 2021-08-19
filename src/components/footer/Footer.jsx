import React from "react"
import Twitter from "./LogoTwitter"
import './Footer.css'

const Footer = () => 
    <footer className='footer'>
        <div className='social'>
            <Twitter />
            <Twitter />
            <Twitter />
            <Twitter />
        </div>
        <div>
            <p>Feito com ❤ por Moisés Lucas © 2021 Livros+</p>
        </div>
    </footer>

export default Footer