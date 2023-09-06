import { styled } from "styled-components";

export const Container = styled.section`
  margin-top: 10vw;
  margin-left: 12vw;
  display: grid;
  place-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: -320px;
  border-radius: 20px;
  background: rgba(194, 212, 251, 0.34);
  width: 75%;
  height: 45%;
`;

export const H1 = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

export const RowImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const ImgContainer = styled.img`
  width: 10vw;
  height: 20vh;
  padding-left: 10vw;
`;
