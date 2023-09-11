
  import LogoImg from "../../assets/Early.png";
import { FirstContainer, Fundo, ImgContainer, Perfil, SecondContainer, Topicos, InputBox, Input } from "./styled";
  
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
            <InputBox>
             <Input id="firstname" type="text" name="firstname" placeholder="🔍  Pesquisar..." required></Input>
            </InputBox>
            <Perfil>Perfil</Perfil>
          </SecondContainer>
        </Fundo>
      </>
    );
  }
  export default Header;
  