import { Container, ImgContainer1, H1 } from "./styled";
import ContainerImg from "../../assets/kidTech.png";

function CardPesquisa() {
  return (
    <>
      <Container>
        <ImgContainer1 src={ContainerImg} alt="Imagem" />

        <H1>Inove hoje e seu jeito de educar e mude vidas no futuro</H1>
      </Container>
    </>
  );
}
export default CardPesquisa;
