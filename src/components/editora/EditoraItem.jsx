import React from "react";

const EditoraItem = (props) =>
    <div className='editoraItem'>
        <h2>{props.nome}</h2>
        <p>{props.descricao}</p>
        <div>
            <button className='editoraExcluir' value={props.id} >Excluir</button>
            <a href={'/editoraCad/' + props.id} className='editoraEditar' value={props.id} >Editar</a>
        </div>
    </div>

export default EditoraItem