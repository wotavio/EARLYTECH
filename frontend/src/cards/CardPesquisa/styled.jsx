import { styled } from "styled-components";
import ContainerImg from "../../assets/Pesquisa.png";

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
`
export const Input = styled.input`
    width: 40%;
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #00000064;
    font-size: 0.8rem;
    margin-left: 60%;
    `
    export const Esquerda = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-content: space-between;
`

export const Container = styled.figure`
  position: relative;
  display: flex;
  width: 99vw;
  height: 25vw;
  flex-direction: column;
  justify-content: column;
  align-items: center;
  gap: 48px;
  border-radius: 20px;
  background-image: url(${ContainerImg});
  background-size: cover;
  background-position: center;
`;

export const BotaoPesquisa = styled.button `
    width: 290px;
    height: 40px;
    border: none;
    background-color: #36e16a;
    padding: 0.90rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    flex-shrink: 10px;
    position: absolute;
    margin-top: 70vh;
    z-index: 10;
  `


export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
export const H1 = styled.label`
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  text-align: center;
  font-family: Arial Black;
  font-size: 200%;
  font-style: normal;
  font-weight: 400;
  margin-left: 60%;
  margin-top: 8vw;
`;
