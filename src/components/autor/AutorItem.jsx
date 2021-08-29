import React from "react";

const AutorItem = (props) =>
    <div className='autorItem'>
        <h2>{props.nome}</h2>
        <p>{props.descricao}</p>
        <div>
            <button className='autorExcluir' value={props.id} >Excluir</button>
            <a href={'/autorCad/' + props.id} className='autorEditar' value={props.id} >Editar</a>
        </div>
    </div>

export default AutorItem