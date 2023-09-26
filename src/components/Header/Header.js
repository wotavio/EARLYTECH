import LogoImg from "../../assets/Early.png";
import { FirstContainer, Fundo, ImgContainer, SecondContainer, Topicos, InputBox, Input, ImgPerfil } from "./styled";
import { Link } from "react-router-dom"
import PerfilIcon from "../../assets/perfil.png";

  function Header() {
    return (
      <>
        <Fundo>
          <FirstContainer>
          <Link to='/home'><ImgContainer src={LogoImg} alt="Logo" /></Link>
          </FirstContainer>
          <SecondContainer>
          <Link to='/home'><Topicos>HOME</Topicos></Link>
          <Link to='/materiais'><Topicos>MATERIAIS</Topicos></Link>
            <Topicos>SUPORTE</Topicos>
            <InputBox>
             <Input id="firstname" type="text" name="firstname" placeholder="🔍  Pesquisar..." required></Input>
            </InputBox>
            <Link to='/config'><ImgPerfil src={PerfilIcon}/></Link>
          </SecondContainer>
        </Fundo>
      </>
    );
  }
  export default Header;
  