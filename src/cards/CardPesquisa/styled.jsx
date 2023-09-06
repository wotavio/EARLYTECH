import { styled } from "styled-components";

export const Container = styled.figure`
  position: relative;
  margin-top: 5vw;
  margin-left: 25%;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: column;
  align-items: center;
  gap: 48px;
  border-radius: 20px;
  background-image: url("../../../public/KidTech.png");
`;

export const ImgContainer1 = styled.img`
  display: flex;
  width: 60vw;
  height: 55vh;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const H1 = styled.label`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
`;
