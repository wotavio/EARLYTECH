import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/cadastro"
import Home from "../pages/Home/Home";
import Config from "../pages/Config/Config";
import Materiais from "../pages/Materiais/Materiais";
import Suporte from "../pages/Suporte/Suporte";
import PgMaterial from "../pages/PgMaterial/PgMaterial";

function Rotas(props){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='home' element={<Home news={props.nes} setNews={props.setNews}/>}/>
                <Route path='/config' element={<Config/>}/>
                <Route path='/materiais' element={<Materiais/>}/>
                <Route path='/suporte' element={<Suporte/>}/>
                <Route path='/PgMaterial' element={<PgMaterial/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;