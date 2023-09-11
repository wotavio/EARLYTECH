// import { Box, Flex } from "@chakra-ui/react"
import { Container, Esquerda, H1, Input, InputBox } from "./styled";
import ContainerImg from "../../assets/Pesquisa.png";

function CardPesquisa() {
  return (
    <>
    <Container>
    <Esquerda>
    <H1>Inove hoje e seu jeito de educar e mude vidas no futuro</H1>
    <InputBox>
    <Input id="firstname" type="text" name="firstname" placeholder="🔍  Pesquisar..." required></Input>
     </InputBox>
     </Esquerda>
      </Container>
    </>
  );
}
export default CardPesquisa;
