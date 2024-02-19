import { Container, RowCard, ImgContainer, H1, Box, RowBox, Perfil, Titulo } from "./styled";
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
  const [recommendations, setRecommendations] = useState([]);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);
  const [filterType, setFilterType] = useState(null);


  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const responses = await Promise.all([
          axios.get('http://localhost:3008/api/posts'),
          axios.get('http://localhost:3008/api/posts'),
          axios.get('http://localhost:3008/api/posts'),
          axios.get('http://localhost:3008/api/posts'),
          axios.get('http://localhost:3008/api/posts'),
          axios.get('http://localhost:3008/api/posts'),
          axios.get('http://localhost:3008/api/posts'),
          axios.get('http://localhost:3008/api/posts'),
          axios.get('http://localhost:3008/api/posts'),
          axios.get('http://localhost:3008/api/posts'),
          axios.get('http://localhost:3008/api/posts'),
          // Adicione mais chamadas para obter diferentes recomendações conforme necessário
        ]);

        const recommendationsData = responses.map(response => response.data);
        setRecommendations(recommendationsData);
      } catch (error) {
        console.error('Erro ao buscar recomendações:', error.response.data);
      }
    }

    fetchRecommendations();
  }, []);

  const handleFilter = async (type) => {
    try {
      const response = await axios.get(`http://localhost:3008/api/posts/filter/${type}`);
      setRecommendations(response.data);
      setFilterType(type);
    } catch (error) {
      console.error('Erro ao filtrar recomendações:', error.response.data);
    }
  };


  return (
    <>
      <Container>
        <RowBox>
          <Titulo>RECOMENDADOS</Titulo>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              FILTRAR
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleFilter('Artigos')}>Artigos</MenuItem>
              <MenuItem onClick={() => handleFilter('Video')}>Videos</MenuItem>
              <MenuItem onClick={() => handleFilter('Ferramenta')}>Ferramentas</MenuItem>
            </MenuList>
          </Menu>
        </RowBox>
        {/* Primeira linha de recomendações */}
        <RowCard>
          {recommendations.slice(0, 3).map((recommendation, index) => (
            <Box key={index} onClick={() => setSelectedRecommendation(recommendation)}>
              <Link to={`/PgMaterial/${recommendation.id}`}>
                <ImgContainer src={recommendation.image} alt="Recomendação" />
              </Link>
              <H1>{recommendation.title}</H1>
            </Box>
          ))}
        </RowCard>
        {/* Segunda linha de recomendações */}
        <RowCard>
          {recommendations.slice(3, 6).map((recommendation, index) => (
            <Box key={index} onClick={() => setSelectedRecommendation(recommendation)}>
              <Link to={`/PgMaterial/${recommendation.id}`}>
                <ImgContainer src={recommendation.image} alt="Recomendação" />
              </Link>
              <H1>{recommendation.title}</H1>
            </Box>
          ))}
        </RowCard>
        <Link to='/materiais'><Perfil>Veja mais</Perfil></Link>
      </Container>
    </>
  );
}

export default CardRecomendado;
