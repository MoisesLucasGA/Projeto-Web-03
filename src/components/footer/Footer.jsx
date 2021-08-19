import React from "react"
import Twitter from "./LogoTwitter"
import Instagram from "./LogoInstagram"
import WhatsApp from "./LogoWhats"
import Facebook from "./LogoFacebook"
import './Footer.css'

const Footer = () => 
    <footer className='footer'>
        <div className='social'>
            <Twitter />
            <Instagram />
            <WhatsApp />
            <Facebook />
        </div>
        <div className='creditos'>
            <p>Feito com <span>❤</span> por Moisés Lucas © 2021 Livros+</p>
            <p>Projeto III - Desenvolvimento de Software para Web 2021.1</p>
        </div>
    </footer>

export default Footer