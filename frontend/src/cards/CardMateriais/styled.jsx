import { styled } from "styled-components";

export const Container = styled.section`
  margin-top: 10vw;
  margin-left: 5vw;
  margin-right: 5vw;
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: -320px;
  border-radius: 20px;
  background: #23238E; 
  // #D3D3D3
  width: auto;
  height: auto;
`;

export const H1 = styled.h1`
  color: white;
  text-align: justify;
  font-family: Arial Black;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin: 2vw;
  
`;

export const RowImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-betwen;
`;
export const ImgContainer = styled.img`
  width: 30%;
  height: 50%;
  padding-left: 5vw;
  padding-right: 2vw;
  justify-content: center;
`;
