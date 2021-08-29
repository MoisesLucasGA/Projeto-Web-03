import React, { useState, useEffect } from "react"
import axios from 'axios'
import EditoraItem from "./EditoraItem";
import './Editora.css'

function Editora() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('/editora')
            .then(res => {
                setData(res.data)
            })
    }, []);
    
    return (
        <div className='editoras'>
            <a className='cadBtn' href='/editoraCad/0'>Cadastrar Editora</a>
            {data.map(data => (
                <EditoraItem id={data.id} nome={data.nome} descricao={data.descricao} />
            ))}
        </div>
    )
}

export default Editora