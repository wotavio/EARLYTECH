import LogoImg from "../../assets/Early.png";
import { Creditos, Direita, Esquerda, FooterContainer, Logo, Texto, Texto1, Titulo, Titulo1 } from "./styled";
  
  function Footer() {
    return (
      <>
        <FooterContainer>
          <Esquerda>
            <Texto>
              Aplicação Web desenvolvida para o Ensino Médio Senac São Leopoldo,
              como produto de conclusão de curso técnico.
              </Texto>
            <Titulo>São Leopoldo, 2023</Titulo>
            <Logo src={LogoImg} />
          </Esquerda>
          <Direita>
            <Creditos>
              <Titulo1>Integrantes</Titulo1>
              <Texto1>Otávio Weiand</Texto1>
            </Creditos>
            <Creditos>
              <Titulo1>Orientadores</Titulo1>
              <Texto1>Guilherme Golschmitt</Texto1>
              <Texto1>Ariane dos Reis Duarte</Texto1>
            </Creditos>
            <Creditos>
              <Titulo1>Linguagens</Titulo1>
              <Texto1>React</Texto1>
              <Texto1>JavaScript</Texto1>
              <Texto1>CSS</Texto1>
              <Texto1>SQL</Texto1>
            </Creditos>
          </Direita>
        </FooterContainer>
      </>
    );
  }
  
  export default Footer;
  