import React  from "react"
import { Route } from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import Header from "./components/header/Header"
import LoginForm from "./components/login/LoginForm"
import CadastroForm from "./components/login/CadastroForm"
import Livro from "./components/livro/LivroIndex"
import Autor from "./components/autor/AutorIndex"
import Editora from "./components/editora/EditoraIndex"
import LivroCad from "./components/livro/LivroCad"
import AutorCad from "./components/autor/AutorCad";
import EditoraCad from "./components/editora/EditoraCad"
import Footer from "./components/footer/Footer"

function App() {

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", minHeight: "90vh" }}>
                <Header />
                <BrowserRouter>
                    <Route exact path='/'>
                        <LoginForm />
                    </Route>
                    <Route path='/livro'>
                        <Livro />
                    </Route>
                    <Route path='/livroCad/:id'>
                        <LivroCad />
                    </Route>
                    <Route path='/autor'>
                        <Autor />
                    </Route>
                    <Route path='/autorCad/:id'>
                        <AutorCad />
                    </Route>
                    <Route path='/editora'>
                        <Editora />
                    </Route>
                    <Route path='/editoraCad/:id'>
                        <EditoraCad />
                    </Route>
                    <Route path='/usuario'>
                        <CadastroForm />
                    </Route>
                </BrowserRouter>
            </div>
            <Footer />
        </>
    );
}

export default App