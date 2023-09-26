import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/cadastro"
import Home from "../pages/Home/Home";
import Config from "../pages/Config/Config";
import Materiais from "../pages/Materiais/Materiais";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/config' element={<Config/>}/>
                <Route path='/materiais' element={<Materiais/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;