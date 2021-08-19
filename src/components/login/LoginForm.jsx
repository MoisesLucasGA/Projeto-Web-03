import React from "react"
import Input from "./LoginInput"
import InputBtn from "./LoginBtn"

import './LoginForm.css'

const LoginForm = () => 
    <div>
        <form className='loginForm' autoComplete='off' action="">
            <h1>Seja Bem Vindo!</h1>
            
            <Input labelTxt='Email:' name='email' tipo='email' holder='exemplo@email.com' />

            <Input labelTxt='Senha:' name='senha' tipo='password' holder='******'/>
            
            <InputBtn name='Entrar' />
        </form>
    </div>

export default LoginForm