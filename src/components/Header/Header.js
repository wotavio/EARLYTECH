
  import LogoImg from "../../assets/Early.png";
import { FirstContainer, Fundo, ImgContainer, Perfil, SecondContainer, Topicos } from "./styled";
  
  function Header() {
    return (
      <>
        <Fundo>
          <FirstContainer>
            <ImgContainer src={LogoImg} alt="Logo" />
          </FirstContainer>
          <SecondContainer>
            <Topicos>HOME</Topicos>
            <Topicos>MATERIAIS</Topicos>
            <Topicos>SUPORTE</Topicos>
            <Topicos>Q</Topicos>
            <Perfil>Perfil</Perfil>
          </SecondContainer>
        </Fundo>
      </>
    );
  }
  export default Header;
  