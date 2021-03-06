import React, { Component } from "react"
import axios from "axios"

class CadastroForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            nome: '',
            email: '',
            senha: ''
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state);
    }

    submitHandler = (e) => {
        axios.post('/usuario', this.state).then(res => {console.log(res); alert('Usuário ' + this.state.nome +' cadastrado com Sucesso')})

    }

    render() {
        const {nome, email, senha} = this.state
        return (
            <div>
                <form className='loginForm' autoComplete='off'>
                    <h1>Por Favor Preencha Todos os Campos</h1>
                    <div className='inputDiv'>
                        <label htmlFor="nome">Nome: 
                            <input className='loginInput' onChange={this.changeHandler} value={nome} name='nome' type='text' placeholder='João Silva' /> 
                        </label>
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor="email">Email:
                        <input className='loginInput' onChange={this.changeHandler} value={email} name='email' type='text' placeholder='exemplo@email.com' />    
                        </label>
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor="senha">Senha:
                        <input className='loginInput' onChange={this.changeHandler} value={senha} name='senha' type='password' placeholder='********'/>
                        </label>
                    </div>
                    <div id='divBtn'>
                        <input className='loginBtn' value='Confirmar' onClick={this.submitHandler} type='button'/>    
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default CadastroForm