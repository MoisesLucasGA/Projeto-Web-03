import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";
import Input from "../login/LoginInput";
import InputBtn from "../login/LoginBtn";
import './Livro.css'


function LivroCad(props) {

    const { id } = useParams()
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios
            .get('/livro/' + id)
            .then(res => {
                setData(res.data)
                console.log(res.data);
            })
    }, [id]);

    if (id > 0) {
        
        return (
            <div>
                <form className='loginForm' autoComplete='off' action="">
                    <h1>Por Favor Preencha Todos os Campos</h1>

                    <Input value={data.titulo} labelTxt='Titulo:' name='titulo' tipo='text' holder='' />
                    <Input value={data.sinopse} labelTxt='Sinopse:' name='sinopse' tipo='text' holder='' />
                    <Input value={data.genero} labelTxt='Gênero:' name='genero' tipo='text' holder='' />
                    <Input value={data.edicao} labelTxt='Edição:' name='edicao' tipo='text' holder='' />
                    <Input value={data.ano_publicacao} labelTxt='Ano de Publicação:' name='ano' tipo='text' holder='' />
                    <Input value={data.autor_id} labelTxt='Autor:' name='autor' tipo='text' holder='' />
                    <Input value={data.editora_id} labelTxt='Editora:' name='editora' tipo='text' holder='' />

                    <InputBtn name='Confirmar' />
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <form className='loginForm' autoComplete='off' action="">
                    <h1>Por Favor Preencha Todos os Campos</h1>

                    <Input labelTxt='Titulo:' name='titulo' tipo='text' holder='' />

                    <Input labelTxt='Sinopse:' name='sinopse' tipo='text' holder='' />

                    <Input labelTxt='Gênero:' name='genero' tipo='text' holder='' />

                    <Input labelTxt='Edição:' name='edicao' tipo='text' holder='' />

                    <Input labelTxt='Ano de Publicação:' name='ano' tipo='text' holder='' />

                    <Input labelTxt='Autor:' name='autor' tipo='text' holder='' />

                    <Input labelTxt='Editora:' name='editora' tipo='text' holder='' />

                    <InputBtn name='Confirmar' />
                </form>
            </div>
        )
    }

}

export default LivroCad