import { styled } from "styled-components";

export const Container = styled.section`
  margin-top: 10vw;
  margin-right: 5vw;
  margin-bottom: 15%;
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: -320px;
  border-radius: 20px;
  width: auto;
  height: auto;
`;
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 80%;
`
export const Input = styled.input`
    width: 40%;
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #00000064;
    font-size: 0.8rem;
    `
  
export const Label = styled.label`
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000c0;
    `
export const H1 = styled.h1`
  color: #23238E;
  text-align: center;
  font-family: Arial Black;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin: 2vw;
  
`;

export const Perfil = styled.button`
  color: white;
  margin-left: 45%;
  display: flex;
  width: 149px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background: var(--button-colour, #6a71f1);
  border: none;
`;
export const RowCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-left: 37%;
`;


export const ImgContainer = styled.img`
  width: 550px;
  height: 300px;
  padding-left: 5vw;
  margin-right: 5vw;
  justify-content: space-between;
  border-radius: 20px;
`;
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #23238E;
    text-align: center;
    font-family: Arial Black;
    font-size: 18px;
    font-style: normal;
    margin-bottom: 5vw;
`