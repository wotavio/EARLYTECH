import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Main, InfosLabel, Topicos, Forms, FormCustom, CustomInput, DisplayButton, SaveButton, Divisor, Entrada, FormCustom1, Divisor1 } from "./styled"



function Suporte() {

    return ( <> 
    <Header/>
    <Main>
    <Topicos>
                        <Tabs>
                            <TabList>
                                <Tab>Perfil</Tab>
                                <Tab>Senha</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Forms>
                                        <FormCustom>
                                            <Divisor>
                                                <Entrada>
                                                    <InfosLabel>Nome de Usuário</InfosLabel>
                                                    <CustomInput type="text" placeholder="Nome de Usuário" />
                                                </Entrada>
                                                <Entrada>
                                                    <InfosLabel>Nome Completo</InfosLabel>
                                                    <CustomInput type="text" placeholder="Nome Completo" />
                                                </Entrada>
                                            </Divisor>
                                            <Divisor>
                                                <Entrada>
                                                    <InfosLabel>Email</InfosLabel>
                                                    <CustomInput type="email" placeholder="Email" />
                                                </Entrada>
                                                <Entrada>
                                                    <InfosLabel>Ocupação</InfosLabel>
                                                    <CustomInput type="text" placeholder="Ocupação" />
                                                </Entrada>
                                            </Divisor>
                                        </FormCustom>
                                    </Forms>
                                </TabPanel>
                                <TabPanel>
                                    <Forms>
                                        <FormCustom1>
                                            <Divisor1>
                                                <Entrada>
                                                    <InfosLabel>Senha atual</InfosLabel>
                                                    <CustomInput type="text" placeholder="Nome" />
                                                </Entrada>
                                            </Divisor1>
                                            <Divisor1>
                                                <Entrada>
                                                    <InfosLabel>Senha nova</InfosLabel>
                                                    <CustomInput type="password" placeholder="Senha nova" />
                                                </Entrada>
                                                <Entrada>
                                                    <InfosLabel>Repetir senha</InfosLabel>
                                                    <CustomInput type="password" placeholder="Repetir sua senha nova" />
                                                </Entrada>
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