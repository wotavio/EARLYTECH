import { Container, ImgContainer, RowImg } from "./styled";
import Artigos from '../../assets/Artigos.png';
import Ferramentas from '../../assets/Ferramentas.png';
import Video from '../../assets/Video.png';

function CardMateriais() {
  return (
    <>
      <Container>
        <h1>Tipos de Didáticas</h1>
        <p>Encontre o método compatível com sua maneira de ensinar.</p>
        <RowImg>
          <ImgContainer src={Artigos} />
          <ImgContainer src={Ferramentas} />
          <ImgContainer src={Video} />
        </RowImg>
      </Container>
    </>
  );
}
export default CardMateriais;
