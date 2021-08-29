import React, { useState, useEffect } from "react"
import axios from 'axios'
import AutorItem from "./AutorItem";
import './Autor.css'

function Autor(){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('/autor')
            .then(res => {
                setData(res.data)
            })
    }, []);
    
    return (
        <div className='autores'>
            <a className='cadBtn' href='/autorCad/0'>Cadastrar Autor</a>
            {data.map(data => (
                <AutorItem id={data.id} nome={data.nome} descricao = {data.descricao} />
            ))}
        </div>
    )
}

export default Autor