import LogoImg from "../../assets/Early.png";
import { FirstContainer, Fundo, ImgContainer, SecondContainer, Topicos, InputBox, Input, ImgPerfil, Button } from "./styled";
import { Link } from "react-router-dom"
import PerfilIcon from "../../assets/perfil.png";
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()

  const handleLogout = () => {
    const id = localStorage.getItem("user")
    const formData = {
      id: id
    }
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <>
      <Fundo>
        <FirstContainer>
          <Link to='/home'><ImgContainer src={LogoImg} alt="Logo" /></Link>
        </FirstContainer>
        <SecondContainer>
          <Link to='/home'><Topicos>HOME</Topicos></Link>
          <Link to='/materiais'><Topicos>MATERIAIS</Topicos></Link>
          <Link to='/suporte'><Topicos>SUPORTE</Topicos></Link>
          <InputBox>
            <Input id="firstname" type="text" name="firstname" placeholder="🔍  Pesquisar..." required></Input>
          </InputBox>
          <Button onClick={handleLogout} border='1px solid #2E266D' variant='ghost'>Sair</Button>
          <Link to='/config'><ImgPerfil src={PerfilIcon} /></Link>
        </SecondContainer>
      </Fundo>
    </>
  );
}
export default Header;
