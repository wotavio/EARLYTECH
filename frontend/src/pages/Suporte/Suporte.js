import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Main, Forms, FormCustom, CustomInput, SaveButton, Divisor, Entrada, FormCustom1, Divisor1, Container, H1, Esquerda, InputBox, Textoo, H2 } from "./styled"
import { Link } from "react-router-dom"



function Suporte() {

    const emailDestino = 'otavioweiand@gmail.com';
  const linkEmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailDestino}`;


    return ( <> 
    <Header/>
    <Main>
            
                        <Tabs>
                            <TabList>
                                <Tab>Suporte</Tab>
                                <Tab>Contato</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Forms>
                                        <FormCustom>
                                            <Divisor>
                                                <Entrada>
                                                    <H1>Bem-vindo ao nosso Centro de Suporte!</H1>
                                                    <Textoo>Estamos aqui para ajudar a tornar sua experiência conosco a mais tranquila e satisfatória possível. Se você estiver enfrentando qualquer problema, dúvida ou apenas precisar de orientação, nossa equipe de suporte está pronta para auxiliar.</Textoo>
                                                    <Textoo></Textoo>
                                                    <Textoo>Como podemos ajudar?</Textoo>
                                                    <Textoo>Perguntas Frequentes (FAQ): Antes de entrar em contato conosco, confira nossa seção de Perguntas Frequentes. É possível que sua pergunta já tenha uma resposta detalhada aqui.</Textoo>
                                                    <Textoo>Contate-nos: Se não encontrar a resposta que procura em nossas FAQ, entre em contato conosco. Nossa equipe de suporte está disponível para ajudar 24 horas por dia, 7 dias por semana.</Textoo>
                                                    <Textoo>Recursos Úteis: Além do suporte direto, oferecemos uma variedade de recursos, como guias passo a passo, tutoriais e vídeos instrutivos, para ajudar a resolver suas questões rapidamente.</Textoo>
                                                    <Textoo>Feedback: Sua opinião é fundamental para nós. Compartilhe seu feedback para nos ajudar a melhorar nossos serviços e produtos.</Textoo>
                                                    <Textoo></Textoo>
                                                    <Textoo>Estamos comprometidos em fornecer suporte excepcional e resolver suas preocupações o mais rápido possível. Agradecemos por escolher nossa empresa e estamos aqui para ajudar em sua jornada conosco.</Textoo>
                                                    <Textoo>ASS: Equipe de Suporte</Textoo>
                                                </Entrada>
                                            </Divisor>
                                        </FormCustom>
                                    </Forms>
                                </TabPanel>
                                <TabPanel>
                                    <Forms>
                                        <FormCustom1>
                                            <Divisor1>
                                               <Container>
                                               <Esquerda>
                                                        <H2>Clique aqui para entrar em contato</H2>
                                                        <InputBox>
                                                        <a href={linkEmail} target="_blank" rel="noopener noreferrer"><SaveButton>Click aqui</SaveButton></a>
                                                        </InputBox>
                                                        </Esquerda>
                                               </Container>
                                            </Divisor1>
                                        </FormCustom1>
                                    </Forms>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
          </Main>
    <Footer/>
    </>
    );
  }
  export default Suporte;