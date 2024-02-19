// import { Box, Flex } from "@chakra-ui/react"
import { Container, Esquerda, H1, Input, InputBox } from './styled';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CardPesquisa() {
const [searchTerm, setSearchTerm] = useState('');
const navigate = useNavigate();

  const handleSearch = () => {
    // Redirecionar para a página Materiais com o termo de pesquisa na URL
    navigate(`/materiais?search=${searchTerm}`);
  };

  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <Container>
        <Esquerda>
          <H1>Inove hoje o seu jeito de educar e mude vidas no futuro</H1>
          <InputBox>
            <Input
        type='text'
        placeholder='Pesquisar'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        />
        </InputBox>
      </Esquerda>
    </Container>
  </>

  );
}

export default CardPesquisa;