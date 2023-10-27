import { styled } from "styled-components";
import ContainerImg from "../../assets/Pesquisa.png";


export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

export const Baner = styled.div`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 55vh;
    gap: 3vw;
`

export const Name = styled.h1`
    color: var(--base-dark-gray, #34364A);
    font-family: Poppins;
    border: none;
    background: none;
    font-size: 36px;
    font-style: bold;
    font-weight: 400;
    line-height: normal;
    margin-left: 13vw;
    margin-top: -8vh;
    `

export const CancelButton = styled.button`
    height: 7vh;
    width: 8vw;
    border: none;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: none;
    border: 1px solid #D9DADE;
    border-radius: 10px;
    color: black;
`
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
export const Esquerda = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-content: space-between;
`

export const SaveButton = styled.button`
    height: 7vh;
    width: 6vw;
    align-items: center;
    border: none;
    margin-left: 75%;
    margin-top: 3vw;
    justify-content: center;
    display: flex;
    background-color:  #6a71f1;
    border: 2%;
    border-radius: 10px;
    color: white;
`

export const Topicos = styled.button`
    color: var(--base-dark-gray, #34364A);
    font-family: Poppins;
    border: none;
    background: none;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 2vw;
    `
export const Fundo = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2vh;
`
export const BannerImg = styled.img`
    width: 100%;
    height: 80%;
    align-items: center;
    border-radius: 20px;
`
export const LogoPerfil = styled.img`
    width: 20vh;
    border-radius: 50%;
    height: 20vh;
    align-items: center;
    border: 10px solid  #6a71f1;
    margin-left: 3vw;
    margin-top: -10vh;
`
export const Forms = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 65vh;
`

export const FormCustom = styled.form`
    display: flex;
    flex-direction: row;
    width: auto;
    height: 45vh;
    gap: 1vh;
    margin-top: 4vh;
    gap: 2vw;
`

export const FormCustom1 = styled.form`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 45vh;
    gap: 1vh;
    margin-top: 4vh;
    gap: 2vw;
`

export const InfosLabel = styled.form`
    font-weight: semi-bold;
    color: black;
`

export const CustomInput = styled.input`
    background-color: white;
    height: 35vh;
    border: 1px solid #000;
    border-radius: 10px;
    width: 50vw;
    padding: 0 0 0 1vw;
    margin-left: 10vw;

    ::placeholder{
        margin-right: 5px;
        // padding: 10px;;
    }
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
  margin-left:-3vw;
`;

export const Divisor = styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
    gap: 5vh;
`

export const Divisor1 = styled.div`
    display: flex;
    flex-direction: row;
`

export const Entrada = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    align-items: flex-start;
`