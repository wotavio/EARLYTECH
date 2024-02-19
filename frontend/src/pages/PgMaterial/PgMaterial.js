import { Container, ImgContainer, Direita, Esquerda, Titulo, Texto1, Topicos, Perfil } from "./styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PgMaterial() {
  const [recommendation, setRecommendation] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchRecommendationDetails() {
      try {
        const response = await axios.get(`http://localhost:3008/api/posts/${id}`);
        setRecommendation(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Erro ao buscar detalhes da recomendação:', error.response.data);
      }
    }

    console.log(recommendation)

    fetchRecommendationDetails();
  }, [id, recommendation]);
  
    if (!recommendation) {
      return <p>Carregando detalhes da recomendação...</p>;
    }
  return (
    <>
      <Header />
      <Container>
        <Esquerda>
          <ImgContainer src={recommendation.image} />
          <Direita>
            <Titulo>{recommendation.title}</Titulo>
            <Texto1>{recommendation.type}</Texto1>
            <Topicos>{recommendation.description}</Topicos>
            <a href={recommendation.links} target="_blank" rel="noopener noreferrer"><Perfil>Veja mais</Perfil></a>
          </Direita>
        </Esquerda>
      </Container>
      <Footer />
    </>
  );
}

export default PgMaterial;