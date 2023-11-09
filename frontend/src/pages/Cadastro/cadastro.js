import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, ContainerFormulario, StyleForm, Botao, InputBoxContainer, Titulo } from "./styled"
import ImagemPrincipal from "../../assets/Early.png"
import { useNavigate } from "react-router-dom"
import { baseUrl } from "../../services/api.js";
import React, {useState} from "react";
import axios from "axios";

function Cadastro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmSenha: ""
    });
 
    console.log(formData)
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.password !== formData.confirmSenha){
            alert("Senhas não coincidem")
        } else{
            const response = await axios.post(`${baseUrl}/user/create`, formData);
 
            if(response.data.success) {
                alert('Usuario cadastrado')
                navigate('/')
            } else {
                alert('Não foi possivel cadastrar');
            }
             
        }
 
        setFormData({
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmSenha: ""
        });
    }
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }


    return (
        <>
            
                <form onSubmit={handleSubmit}>
                <Container>
                <ContainerForm  >
                    <Form>
                        <Divi>
                            <FormImage>
                                <Image src={ImagemPrincipal} />
                            </FormImage>
                            <ContainerFormulario>
                                <Titulo>INSIRA SUAS INFORMAÇÕES</Titulo>
                                {/* <LogoImg src={Logo} /> */}
                                <StyleForm >
                                    <InputBoxContainer>
                                        <InputBox>
                                            <Label for="firstname">Nome</Label>
                                            <Input type="text" placeholder="Digite seu nome" 
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required/>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="firstname">Email</Label>
                                            <Input type="email" placeholder="Digite seu email" 
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required/>
                                        </InputBox>
                                    </InputBoxContainer>
                                    <InputBoxContainer>
                                        <InputBox>
                                            <Label for="firstname">Telefone</Label>
                                            <Input type="tel" placeholder="Digite seu telefone" 
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required/>
                                        </InputBox><InputBox>
                                            <Label for="firstname">Senha</Label>
                                            <Input type="password" placeholder="Digite sua senha" 
                                            id="password"
                                            name="password"
                                            value={formData.senha}
                                            onChange={handleChange}
                                            required/>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="firstname">Confirme sua senha</Label>
                                            <Input type="password" placeholder="Confirme sua senha" 
                                            id="confirmSenha"
                                            name="confirmSenha"
                                            value={formData.confirmSenha}
                                            onChange={handleChange}
                                            required/>
                                        </InputBox>
                                    </InputBoxContainer>
                                </StyleForm>
                                <Botao type="submit">Continuar</Botao>
                            </ContainerFormulario>
                        </Divi>
                    </Form>
                </ContainerForm >
                </Container>
            </form>

        </>
    )
}

export default Cadastro;