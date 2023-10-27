import { Container, ImgContainer, Direita, Esquerda, Titulo, Texto1, Topicos } from "./styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Recomendado from '../../assets/Recomendado.png';

function PgMaterial() {
    return (
      <>
      <Header/>
      <Container>
          <Esquerda>
          <ImgContainer src={Recomendado}/>
          <Direita>
              <Titulo>Nome do Material</Titulo>
              <Texto1>Postagem</Texto1>
             <Topicos>Está parte será destinada para descrever a tecnologia e como ela deve ser utilizada. Dando uma breve descrição da mesma, sempre sendo muito didático!</Topicos>
          </Direita>
          </Esquerda>
        </Container>
        <Footer/>
      </>
    );
  }
  export default PgMaterial;
  