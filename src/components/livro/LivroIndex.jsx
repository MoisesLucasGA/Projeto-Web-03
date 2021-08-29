import React, { useState, useEffect } from "react"
import axios from 'axios'
import LivroItem from "./LivroItem";
import "./Livro.css";

//TITULO - SINOPSE - GENERO - EDIÇÃO - ANO - AUTOR - EDITORA

function Livro() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('/livro')
            .then(res => {
                setData(res.data)
                console.log(res.data);
            })
    }, []);

    return (
        <div className='livros'>
            <a className='cadBtn' href='/livroCad/0'>Cadastrar Livro</a>
                {data.map(data => (
                    <LivroItem id={data.id} titulo={data.titulo} sinopse={data.sinopse} autor={data.Autor.nome} genero={data.genero} edicao={data.edicao} ano={data.ano_publicacao} editora={data.Editora.nome} />
                ))}
        </div>
    )
}




export default Livro