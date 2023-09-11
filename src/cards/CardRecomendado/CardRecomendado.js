import { Container, RowCard, ImgContainer, H1, Input, InputBox, Label, Box } from "./styled";
import Recomendado from '../../assets/Recomendado.png';

function CardRecomendado() {
  return (
    <>
      <Container>
        <H1>RECOMENDADOS</H1>
        <InputBox>
         <Label for="filtro">FILTRAR</Label>
          <Input id="filtro" type="search" name="Filtro" placeholder="Search" required></Input>
          </InputBox>
        <RowCard>
          <Box>
          <ImgContainer src={Recomendado} />
          <p>Nome do material</p>
          </Box>
          <Box>
          <ImgContainer src={Recomendado} />
          <p>Nome do material</p>
          </Box>
          <Box>
          <ImgContainer src={Recomendado} />
          <p>Nome do material</p>
          </Box>
        </RowCard>
        <RowCard>
        <Box>
          <ImgContainer src={Recomendado} />
          <p>Nome do material</p>
          </Box>
          <Box>
          <ImgContainer src={Recomendado} />
          <p>Nome do material</p>
          </Box>
          <Box>
          <ImgContainer src={Recomendado} />
          <p>Nome do material</p>
          </Box>
        </RowCard>
      </Container>
    </>
  );
}
export default CardRecomendado;
