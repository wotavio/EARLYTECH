import { styled } from "styled-components";

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
`
export const Input = styled.input`
    width: 80%;
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #00000064;
    font-size: 0.8rem;
    `


export const Fundo = styled.div`
  width: 98vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
`;

export const FirstContainer = styled.div`
  width: 25vw;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const SecondContainer = styled.div`
  width: 70vw;
  height: 10vh;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 3vw;
`;

export const ImgContainer = styled.img`
  width: 17vw;
  height: 13vh;
  padding-left: 10vw;
`;
export const ImgPerfil = styled.img`
  width: 8vw;
  height: 10vh;
  padding-left: 2vw;
  
`;

export const Perfil = styled.button`
  color: white;
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
export const Topicos = styled.button`
  gap: 40px;
  color: #667294;
  border: none;
  background: none;
  font-family: Arial Black;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin-right: 3vw;
`;
