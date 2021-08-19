import React from "react"
import './Header.css'
import Link from "./Link"
import Logo from "./Logo"

const styleA = {
    display: "flex",
    flexGrow: "2"
}


const Header = () =>
    <header className='mainHeader'>
        <a style={styleA} href="home">
            <Logo />
        </a>
        <div className='headerLinks'>
            <Link nome='Editoras' link='editora' />
            <Link nome='Autores' link='autores' />
            <Link nome='Livros' link='livros' />
        </div>
        <div className='headerBtn'>
            <Link nome='Entrar' link='#' />
            <Link nome='Cadastre-se' link='#' />
        </div>
    </header>

export default Header