import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, ContainerFormulario, StyleForm, Botao, InputBoxContainer, Titulo, Palavra } from "./styled"
import ImagemPrincipal from "../../assets/Early.png"
import { Link, useNavigate, } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Login() {
    const navigate = useNavigate()
        
    const goToHome = () => {
        navigate('/home')
    };
    

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const saveUserInfoLocalStorage = (token)=>{

        localStorage.setItem('token', token)
    
        localStorage.setItem('email', email)
    
      }
    
      const handleSubmit = (e)=>{
        e.preventDefault()

        const credentials = {email, password}
        
        axios.post('http://localhost:8000/login', credentials, {
    
      headers: {
        'Content-Type': 'application/json',
      },
    
      }). then(response =>{
      alert(response.data.message)
      saveUserInfoLocalStorage(response.data.token)
      goToHome()
      })
    
      .catch(error => console.log(error))
    
      }

    return (
        <>
            <Container>
                <ContainerForm  >
                    <Form onSubmit={handleSubmit}>
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
                                            <Input value={email} onChange = {(e)=>setEmail(e.target.value)} type="email" placeholder="Digite seu email" ></Input>
                                        </InputBox>
                                    </InputBoxContainer>
                                    <InputBoxContainer>
                                    <InputBox>
                                            <Label for="firstname">Senha</Label>
                                            <Input value={password} onChange = {(e)=>setPassword(e.target.value)} type="password" placeholder="Digite sua senha" required></Input>
                                        </InputBox>
                                        <InputBox>
                                        <Link to='/Home'><Botao class="submit" id="submit" value="Entrar" type="submit">Continuar</Botao></Link>
                                        </InputBox>
                                    </InputBoxContainer>
                                    <Link to='/cadastro'><Palavra>cadastrar-se</Palavra></Link>
                                </StyleForm>
                            </ContainerFormulario>
                        </Divi>
                    </Form>
                </ContainerForm >
            </Container>

        </>
    )

}

export default Login;