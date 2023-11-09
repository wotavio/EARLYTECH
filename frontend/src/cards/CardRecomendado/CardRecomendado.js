import { Container, RowCard, ImgContainer, H1, Box, RowBox, Perfil } from "./styled";
import Recomendado from "../../assets/Recomendado.png"

import { Link } from "react-router-dom"

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";

function CardRecomendado() {
  return (
    <>
      <Container>
        <RowBox>
          <H1>RECOMENDADOS</H1>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              FILTRAR
            </MenuButton>
            <MenuList>
              <MenuItem>Artigos</MenuItem>
              <MenuItem>Videos</MenuItem>
              <MenuItem>Ferramentas</MenuItem>
            </MenuList>
          </Menu>
        </RowBox>
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
        <Link to='/materiais'><Perfil>Veja mais</Perfil></Link>
      </Container>
    </>
  );
}
export default CardRecomendado;
