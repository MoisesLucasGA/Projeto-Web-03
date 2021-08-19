import React from "react"
import Input from "./LoginInput"
import InputBtn from "./LoginBtn"

const CadastroForm = () =>
    <div>
        <form className='loginForm' autoComplete='off' action="">
            <h1>Por Favor Preencha Todos os Campos</h1>
            
            <Input labelTxt='Nome:' name='nome' tipo='text' holder='João Silva' />
            
            <Input labelTxt='Email:' name='email' tipo='email' holder='exemplo@email.com' />

            <Input labelTxt='Senha:' name='senha' tipo='password' holder='******'/>
            
            <InputBtn name='Confirmar' />
        </form>
    </div>

export default CadastroForm