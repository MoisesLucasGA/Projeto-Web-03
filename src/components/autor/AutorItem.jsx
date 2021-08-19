import React from "react";

const AutorItem = (props) =>
    <div className='autorItem'>
        <h2>{props.nome}</h2>
        <p>{props.descricao}</p>
        <div>
            <button className='autorExcluir'>Excluir</button>
            <button className='autorEditar'>Editar</button>
        </div>
    </div>

export default AutorItem