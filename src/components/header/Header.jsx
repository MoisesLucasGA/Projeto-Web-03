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
        <a style={styleA} href="/">
            <Logo />
        </a>
        <div className='headerLinks'>
            <Link nome='Editoras' link='http://localhost:3000/editora' />
            <Link nome='Autores' link='http://localhost:3000/autor' />
            <Link nome='Livros' link='http://localhost:3000/livro' />
        </div>
        <div className='headerBtn'>
            <Link nome='Entrar' link='/' />
            <Link nome='Cadastre-se' link='http://localhost:3000/usuario' />
        </div>
    </header>

export default Header