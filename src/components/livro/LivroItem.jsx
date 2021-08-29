import React from "react"

//TITULO - SINOPSE - GENERO - EDIÇÃO - ANO - AUTOR - EDITORA

const LivroItem = (props) =>
    <div className='livroItem'>
        <h2>{props.titulo}</h2>
        <p>{props.sinopse}</p>
        <p>Autor: {props.autor}</p>
        <p>Gênero: {props.genero}</p>
        <p>Edição: {props.edicao}</p>
        <p>Ano de Publicação: {props.ano}</p>
        <p>Editora: {props.editora}</p>
        <div>
            <button className='livroExcluir' value={props.id}>Excluir</button>
            <a href={'/livroCad/' + props.id} className='livroEditar' value={props.id}>Editar</a>
        </div>
        
    </div>
export default LivroItem