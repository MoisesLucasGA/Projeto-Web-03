import React, { Component } from "react"
import axios from 'axios'
import { withRouter } from "react-router";
import './Autor.css'

class AutorCad extends Component {

    constructor(props){
        super(props)
        this.state = {
            nome: '',
            descricao: ''
        }
    }
    
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state);
    }

    submitHandler = (e) => {
        axios.post('/autor', this.state).then(res => {console.log(res); alert('Autor ' + this.state.nome +' cadastrado com Sucesso')})
    }

    render() {
        const {nome, descricao} = this.state
        return (
            <div>
                <form className='loginForm' autoComplete='off'>
                    <h1> Por Favor Preencha Todos os Campos</h1>
                    <div className='inputDiv'>
                        <label htmlFor="nome">Nome: 
                            <input className='loginInput' onChange={this.changeHandler} value={nome} name='nome' type='text' placeholder='João Silva' /> 
                        </label>
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor="descricao">Descrição:
                        <input className='loginInput' onChange={this.changeHandler} value={descricao} name='descricao' type='text' placeholder='' />    
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
export default withRouter(AutorCad)