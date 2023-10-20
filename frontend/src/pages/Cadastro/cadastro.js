import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, ContainerFormulario, StyleForm, Botao, InputBoxContainer, Titulo } from "./styled"
import ImagemPrincipal from "../../assets/Early.png"
import { useNavigate } from "react-router-dom"

function Cadastro() {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/')}
    return (
        <>
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
                                            <Label for="firstname">Primeiro Nome</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="firstname">Sobrenome</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite seu sobrenome" required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="firstname">Email</Label>
                                            <Input id="firstname" type="email" name="firstname" placeholder="Digite seu email" required></Input>
                                        </InputBox>
                                    </InputBoxContainer>
                                    <InputBoxContainer>
                                        <InputBox>
                                            <Label for="firstname">Telefone</Label>
                                            <Input id="firstname" type="tel" name="firstname" placeholder="Digite seu telefone" required></Input>
                                        </InputBox><InputBox>
                                            <Label for="firstname">Senha</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite sua senha" required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="firstname">Confirme sua senha</Label>
                                            <Input id="firstname" type="password" name="firstname" placeholder="Confirme sua senha" required></Input>
                                        </InputBox>
                                    </InputBoxContainer>
                                </StyleForm>
                                <Botao><p onClick={goToLogin}>Continuar</p></Botao>
                            </ContainerFormulario>
                        </Divi>
                    </Form>
                </ContainerForm >
            </Container>

        </>
    )
}

export default Cadastro;