import { Container, RowCard, ImgContainer, H1, Box, RowBox, Perfil } from "./styled";
import mateapi from "../../api/api.json"
import { Link } from "react-router-dom"
import Cardmat from "../CardApi/CardApi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";

function CardRecomendado({ url, nome }) {
  console.log(mateapi)
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
        {mateapi.map((dado) => {
      return(<>
        <CardRecomendado key={dado.id}
        url={dado.imagem}
        nome={dado.nome}
        />
      </>)
    })}
        {mateapi.map((dado) => {
      return(<>
        <CardRecomendado key={dado.id}
        url={dado.imagem}
        nome={dado.nome}
        />
      </>)
    })}
        {mateapi.map((dado) => {
      return(<>
        <CardRecomendado key={dado.id}
        url={dado.imagem}
        nome={dado.nome}
        />
      </>)
    })}
        </RowCard>
        <RowCard>
        <Cardmat/>
          <Cardmat/>
          <Cardmat/>
        </RowCard>
        <Link to='/materiais'><Perfil>Veja mais</Perfil></Link>
      </Container>
    </>
  );
}
export default CardRecomendado;
