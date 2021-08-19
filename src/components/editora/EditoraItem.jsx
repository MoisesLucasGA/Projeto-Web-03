import React from "react";

const EditoraItem = (props) =>
    <div className='editoraItem'>
        <h2>{props.nome}</h2>
        <p>{props.descricao}</p>
        <div>
            <button className='editoraExcluir'>Excluir</button>
            <button className='editoraEditar'>Editar</button>
        </div>
    </div>

export default EditoraItem