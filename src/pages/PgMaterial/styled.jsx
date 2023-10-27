import { styled } from "styled-components";

export const Container = styled.section`
  margin-top: 10vw;
  margin-left: 5vw;
  margin-right: 5vw;
  display: grid;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: -320px;
  border-radius: 20px;
  width: auto;
  height: auto;
`

export const Esquerda = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
`

export const Direita = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
`
export const ImgContainer = styled.img`
  width: 50%;
  height: 50%;
  padding-left: 5vw;
  margin-right: 5vw;
  justify-content: center;
`;
export const Texto1 = styled.p`
    color: #7A757D;
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 0;
`
export const Topicos = styled.p`
    color: #7A757D;
    font-family: Arial Black;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 5%;
`

export const Titulo = styled.h1`
    color: #7A757D;
    font-family: Arial Black;
    font-size: 37px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`