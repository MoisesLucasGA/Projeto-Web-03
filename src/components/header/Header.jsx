import React from "react"
import './Header.css'
import Link from "./Link"

const Header = () =>
    <header className='mainHeader'>
        Cabeçalho
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