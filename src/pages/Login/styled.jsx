import { styled } from "styled-components";

export const CaixaDeTexto = styled.div`
    background-color: black;
    width: 25vw;
    height: 20vh;
`

export const Container = styled.div`
    width: 90%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.34);

    width: 100%;
    height: 100vh; 
    /* display: flex;
    align-items: center; */
    background: #0c0ce9c7;
`

export const ContainerForm = styled.div`
width: 70%;
display: absolute;
align-self: center;
height: 100%;
justify-content: center;
flex-direction: row;
margin-top: 10%;
`

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0c0ce94d;
`
export const Form = styled.div`
    width: 70vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 3vh;
    border-radius: 20px;
`
export const FormImage = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`
export const Image = styled.img`
    width: 100%;
    height: 80%;
`

export const Header = styled.div`
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
   
`
export const Palavra = styled.p`
    font-size: 12px;
    color:#0c0ce9c7;
`
export const Titulo = styled.h1`
    font-size: 36px;
    color:#0c0ce9c7;
    text-align: center;
    justify-content: center;
    padding: 0vh;
    margin-top: 10vh;
`
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
`
export const Input = styled.input`
    width: 80%;
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #00000064;
    font-size: 0.8rem;`

export const Label = styled.label`
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000c0;
    `

export const Divi = styled.div`
    display: flex;
    height: 100%;
    gap: 2vw;
`

export const LogoImg = styled.img`
    width: 180px;
`

export const ContainerFormulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0vh;
`

export const StyleForm = styled.div`
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    align-items: center;
`

export const Botao = styled.button`
    width: 80%;
    border: none;
    background-color: #261ebe;
    padding: 0.62rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 8.078px;
    box-shadow: 0px 12.116715431213379px 24.233430862426758px 0px rgba(1, 11, 253, 0.12);
    justify-content: center;
    color: white;
`

export const InputBoxContainer = styled.form`
    display: flex;
    flex-direction: column;
`