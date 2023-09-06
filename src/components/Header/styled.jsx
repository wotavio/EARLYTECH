import { styled } from "styled-components";

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
  width: 71vw;
  height: 10vh;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ImgContainer = styled.img`
  width: 10vw;
  height: 20vh;
  padding-left: 10vw;
`;

// export const Logo = styled.img`
//     width: 5vw;
//     height: 8vh;
//     padding-left: 1vw;
// `
export const Perfil = styled.button`
  color: white;
  margin-left: 2vw;
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
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
