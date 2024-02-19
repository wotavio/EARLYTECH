import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/cadastro"
import Home from "../pages/Home/Home";
import Config from "../pages/Config/Config";
import Materiais from "../pages/Materiais/Materiais";
import Suporte from "../pages/Suporte/Suporte";
import PgMaterial from "../pages/PgMaterial/PgMaterial";
import CardRecomendado from '../cards/CardRecomendado/CardRecomendado'; 

function Rotas(props){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path='config' element={<Config/>}/>
                <Route path='materiais' element={<Materiais/>}/>
                <Route path='suporte' element={<Suporte/>}/>
                {/* <Route path='PgMaterial' element={<PgMaterial/>}/> */}
                <Route exact path="/" component={CardRecomendado} />
                <Route path="/PgMaterial/:id" element={<PgMaterial />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;