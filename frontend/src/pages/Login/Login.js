import { Container, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, ContainerFormulario, StyleForm, Botao, InputBoxContainer, Titulo, Palavra, Formulario } from "./styled"
import ImagemPrincipal from "../../assets/Early.png"
import { Link, useNavigate } from "react-router-dom"
import React, { useState } from "react"
import axios from "axios"
import { baseUrl } from "../../services/api"

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

 
    const goToHome = () =>{
        navigate('/home')
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email: email,
            password: password
        }

        console.log(formData)
 
        axios.post(`${baseUrl}/auth/login`, formData)
            .then(function (response) {
                console.log(response)
                localStorage.setItem('user', response.data.data[0].id)
                localStorage.setItem('token', response.data.data[0].token)
                alert(response.data.message)
                goToHome()
            })
            .catch(function (error) {
                alert(error.response.data.msg)
            });
 
            setEmail('')
            setPassword('')
    }
 

    return (
        <>
            <Container>
                <ContainerForm  >
                    <Formulario>
                        <Divi>
                            <FormImage>
                                <Image src={ImagemPrincipal} />
                            </FormImage>
                            <ContainerFormulario>
                                <Titulo>INSIRA SUAS INFORMAÇÕES</Titulo>
                                <StyleForm >
                                    <InputBoxContainer>
                                        <InputBox>
                                            <Label for="firstname">Email</Label>
                                            <Input type="email" 
                                            placeholder="Digite seu email" 
                                            value={email}
                                            onChange={(e)=>setEmail(e.target.value)}
                                            required/>
                                        </InputBox>
                                    </InputBoxContainer>
                                    <InputBoxContainer>
                                    <InputBox>
                                            <Label for="firstname">Senha</Label>
                                            <Input type="password" 
                                            placeholder="Digite sua senha" 
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                            required/>
                                        </InputBox>
                                        <InputBox>
                                        <Botao onClick={handleSubmit}>Continuar</Botao>
                                        </InputBox>
                                    </InputBoxContainer>
                                    <Link to='/cadastro'><Palavra>cadastrar-se</Palavra></Link>
                                </StyleForm>
                            </ContainerFormulario>
                        </Divi>
                    </Formulario>
                </ContainerForm >
            </Container>

        </>
    )

}

export default Login;