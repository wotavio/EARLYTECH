import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Main, InfosLabel, Topicos, Forms, FormCustom, CustomInput, SaveButton, Divisor, Entrada, FormCustom1, Divisor1, Container, H1, Esquerda, InputBox } from "./styled"



function Suporte() {

    return ( <> 
    <Header/>
    <Main>
    <Topicos>
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
                                                    <InfosLabel>Nos conte seu problema</InfosLabel>
                                                    <CustomInput type="text" placeholder="Escreva aqui..." />
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
                                                        <H1>Clique aqui para entrar em contato</H1>
                                                        <InputBox>
                                                        <SaveButton class="submit" id="submit" type="submit">Click here</SaveButton>
                                                        </InputBox>
                                                        </Esquerda>
                                               </Container>
                                            </Divisor1>
                                        </FormCustom1>
                                    </Forms>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Topicos>
          </Main>
    <Footer/>
    </>
    );
  }
  export default Suporte;