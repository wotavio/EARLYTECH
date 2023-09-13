
  import LogoImg from "../../assets/Early.png";
import { FirstContainer, Fundo, ImgContainer, Perfil, SecondContainer, Topicos, InputBox, Input } from "./styled";
import { Link, useNavigate } from "react-router-dom"

  function Header() {
    const navigate = useNavigate()
    const goToPerfil = () => {
        navigate('/config')}
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
            <Link to='/config'><Perfil>Perfil</Perfil></Link>
          </SecondContainer>
        </Fundo>
      </>
    );
  }
  export default Header;
  