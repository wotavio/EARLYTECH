import { Container, RowCard, ImgContainer, H1, Box, RowBox, Perfil } from "./styled";
import Recomendado from "../../assets/Recomendado.png"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  const [recommendation, setRecommendation] = useState({});

  useEffect(() => {
    async function fetchRecommendation() {
      try {
        const response = await axios.get('http://localhost:3008/api/posts');
        setRecommendation(response.data);
      } catch (error) {
        console.error('Erro ao buscar recomendação:', error.response.data);
      }
    }

    fetchRecommendation();
  }, []);

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
          <Link to='/PgMaterial'>
          <ImgContainer src={recommendation.image} alt="Recomendação" />
          </Link>
          <h2>{recommendation.title}</h2>
        </Box>
        <Box>
          <Link to='/PgMaterial'>
          <ImgContainer src={recommendation.image} alt="Recomendação" />
          </Link>
          <h2>{recommendation.title}</h2>
        </Box>
          {recommendation && (
        <Box>
          <Link to='/PgMaterial'>
          <ImgContainer src={recommendation.image} alt="Recomendação" />
          </Link>
          <h2>{recommendation.title}</h2>
        </Box>
      )}
        </RowCard>
        <RowCard>
        <Box>
          <Link to='/PgMaterial'>
          <ImgContainer src={recommendation.image} alt="Recomendação" />
          </Link>
          <h2>{recommendation.title}</h2>
        </Box>
        <Box>
          <Link to='/PgMaterial'>
          <ImgContainer src={recommendation.image} alt="Recomendação" />
          </Link>
          <h2>{recommendation.title}</h2>
        </Box>
        <Box>
          <Link to='/PgMaterial'>
          <ImgContainer src={recommendation.image} alt="Recomendação" />
          </Link>
          <h2>{recommendation.title}</h2>
        </Box>
        </RowCard>
        <Link to='/materiais'><Perfil>Veja mais</Perfil></Link>
      </Container>
    </>
  );
}

export default CardRecomendado;
