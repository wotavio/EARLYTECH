import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, LogoImg, ContainerFormulario, StyleForm, Botao, InputBoxContainer, Titulo } from "./styled"
import ImagemPrincipal from "../../assets/Early.png"
import Logo from "../../assets/imgLogin.png"
function Login() {
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
                                            <Label for="firstname">Email</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite seu email" required></Input>
                                        </InputBox>
                                    </InputBoxContainer>
                                    <InputBoxContainer>
                                    <InputBox>
                                            <Label for="firstname">Senha</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite sua senha" required></Input>
                                        </InputBox>
                                        <InputBox>
                                        <Botao>Continuar</Botao>
                                        </InputBox>
                                    </InputBoxContainer>
                                </StyleForm>
                            </ContainerFormulario>
                        </Divi>
                    </Form>
                </ContainerForm >
            </Container>

        </>
    )
}

export default Login