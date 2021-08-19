import React from "react"
import Header from "./components/header/Header"
import LoginForm from "./components/login/LoginForm"
// import CadastroForm from "./components/login/CadastroForm"
import Livro from "./components/livro/LivroIndex"
// import Autor from "./components/autor/AutorIndex"
// import Editora from "./components/editora/EditoraIndex"

import Footer from "./components/footer/Footer"

const App = () => 
    <>
        <div style={{display: "flex",flexDirection: "column",minHeight: "90vh"}}>
            <Header />
            <LoginForm />
        </div>
        <Footer />
    </>
        

export default App