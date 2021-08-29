import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";
import Input from "../login/LoginInput";
import InputBtn from "../login/LoginBtn";
import './Editora.css'


function EditoraCad() {

    const { id } = useParams()
    const [data, setData] = useState({nome: '', descricao:''});


    const changeHandler = (e) => {
        setData({[e.target.name]: e.target.value})
        console.log(data);
    }

    const submitHandler = (e) => {
            if(id>0){
                axios
            .put('/editora', data)
            .then(res => {
                setData(res.data)
            }).catch(error => {console.log(error)})
            }else{
                axios
            .post('/editora', data)
            .then(res => {
                setData(res.data)
            }).catch(error => {console.log(error)})
            }
            
    }

    
    useEffect(() => {
        axios
            .get('/editora/' + id)
            .then(res => {
                setData(res.data)
            }).catch(error => {console.log(error)})

    }, [id]);

    return (
        <div>
            <form className='loginForm' autoComplete='off' action="">
                <h1>Por Favor Preencha Todos os Campos</h1>
                <div className='inputDiv'>
                    <label htmlFor="nome">Nome: 
                        <input className='loginInput' onChange={changeHandler} value={data.nome} name='nome' type='text' placeholder='João Silva' /> 
                    </label>
                </div>
                <div className='inputDiv'>
                    <label htmlFor="descricao">Descrição:
                    <input className='loginInput' onChange={changeHandler} value={data.descricao} name='descricao' type='text' placeholder='' />    
                    </label>
                </div>
                <div id='divBtn'>
                    <input className='loginBtn' value='Confirmar' onClick={submitHandler} type='button'/>    
                </div>
            </form>
        </div>
    )

}

export default EditoraCad