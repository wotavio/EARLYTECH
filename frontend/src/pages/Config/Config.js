import Header from "../../components/Header/Header";
import { Main, Baner, BannerImg, InfosLabel, LogoPerfil, Fundo, Topicos, Name, Forms, FormCustom, CustomInput, DisplayButton, CancelButton, SaveButton, Divisor, Entrada, FormCustom1, Divisor1 } from "./styled"
import Banner from "../../assets/Banner.png";
import Perfil from "../../assets/LogoPerfil.png";
import Footer from "../../components/Footer/Footer"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Tabs, TabList, TabPanels, Tab, TabPanel, useToast } from '@chakra-ui/react'
import { baseUrl } from "../../services/api";

function Config() {
    const navigate = useNavigate()
    const id = localStorage.getItem("user")
    const formDatas = {
        id: id
    }
    const [user, setUser] = useState()
    const [nome, setNome] = useState()
    const [cargo, setCargo] = useState()
    const [email, setEmail] = useState()
    const [confirmSenha, setConfirmSenha] = useState()
    const [senha, setSenha] = useState()
    const toast = useToast()


    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/')
        }
    }, [navigate])

    useEffect(() => {
        axios.post(`${baseUrl}/find/findUser`, formDatas)
            .then(function (response) {
                setUser(response.data.data)
            })
            .catch(function (error) {
                alert(error.response.data.msg)
            });
    })

    const handleAlter = () => {
        if (senha !== confirmSenha) {
            alert("Novas senhas não coincidem")
        } else {
            const formData = {};
        }
        if (nome) {
            formDatas.name = nome;
        }
        if (email) {
            formDatas.email = email;
        }
        if (senha) {
            formDatas.password = senha;
        }

        console.log(formDatas)

        axios.put(`${baseUrl}/user/${id}`, formDatas)
            .then(function (response) {
                toast({
                    position: 'bottom-left',
                    title: 'Sucesso',
                    description: "Informações alteradas",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            })
            .catch(function (error) {
                console.log(error)
            });

        setNome('')
        setCargo('')
        setEmail('')
        setSenha('')
        setConfirmSenha('')
    }


    const handleCancel = () => {
        setNome('')
        setCargo('')
        setEmail('')
        setSenha('')
        setConfirmSenha('')
    }


    return (
        <>
            {user ? (
                <>
                    <Header />
                    <Main>
                        <Baner>
                            <BannerImg src={Banner} /> {/* Corrected variable name */}
                            <LogoPerfil src={Perfil} />
                            <Name>{user.name}</Name>
                        </Baner>
                        <Fundo>
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
                                                            <InfosLabel>Nome</InfosLabel>
                                                            <CustomInput value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder={user.name} />
                                                        </Entrada>
                                                        <Entrada>
                                                            <InfosLabel>Nome Completo</InfosLabel>
                                                            <CustomInput type="text" placeholder="Nome Completo" />
                                                        </Entrada>
                                                    </Divisor>
                                                    <Divisor>
                                                        <Entrada>
                                                            <InfosLabel>Email</InfosLabel>
                                                            <CustomInput value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder={user.email} />
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
                                                            <InfosLabel>Senha nova</InfosLabel>
                                                            <CustomInput value={senha} type="password" onChange={(e) => setSenha(e.target.value)} placeholder="Senha nova" />
                                                        </Entrada>
                                                    </Divisor1>
                                                    <Divisor1>
                                                        <Entrada>
                                                            <InfosLabel>Repetir senha nova</InfosLabel>
                                                            <CustomInput value={confirmSenha} type="password" onChange={(e) => setConfirmSenha(e.target.value)} placeholder="Repetir sua senha nova" />
                                                        </Entrada>
                                                    </Divisor1>
                                                </FormCustom1>
                                            </Forms>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </Topicos>
                            <DisplayButton>
                                <CancelButton onClick={handleCancel} className="submit" id="submit" >Cancelar</CancelButton>
                                <SaveButton onClick={handleAlter} className="submit" id="submit" type="submit">Salvar</SaveButton>
                            </DisplayButton>
                        </Fundo>
                    </Main>
                    <Footer />
                </>
            ) : (
                <></>
            )}
        </>
    );
}
export default Config;