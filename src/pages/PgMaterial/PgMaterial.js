import { Container, ImgContainer, Direita, Esquerda, Titulo, Texto1, Topicos } from "./styled";


function PgMaterial() {
    return (
      <>
      <Container>
          <Esquerda>
          <ImgContainer src={Prof} />
          <Direita>
              <Titulo>Por que o uso tecnológico é importante?</Titulo>
              <Texto1>Muitas vezes mudanças na maneira de ensinar podem assustar as pessoas. No entanto, assim como tudo no mundo a educação precisa evoluir, tendo como peça fundamental a tecnologia.</Texto1>
              <Topicos>1) Acesso a recursos diversos: A tecnologia oferece uma ampla gama de recursos educacionais, como vídeos e aplicativos, tornando o aprendizado mais envolvente e acessível.</Topicos>
              <Topicos>2) Personalização da aprendizagem: A tecnologia permite adaptar o ensino às necessidades individuais dos alunos, tornando o aprendizado mais eficaz.</Topicos>
              <Topicos>3) Preparação para o mundo digital: O uso da tecnologia nas salas de aula ajuda os alunos a adquirirem habilidades digitais essenciais para o futuro em uma sociedade cada vez mais tecnológica.</Topicos>
          </Direita>
          </Esquerda>
        </Container>
      </>
    );
  }
  export default PgMaterial;
  