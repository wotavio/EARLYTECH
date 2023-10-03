import {ChakraProvider, extendTheme} from "@chakra-ui/react"
import Rotas from "./Rotas/Rotas";
import { useState } from "react";

function App(){
  const [news, setNews] = useState([])
  const styles = {
    global: () => ({
      body: {
        fontFamily: 'Arial Black',
        margin: 0,
        padding: 0,
        background: 'var(--base-light-gray, #F6F8FD)',
      }})}

  const theme = extendTheme({styles})

  return (
    <>
    <ChakraProvider theme={theme}>
      <Rotas/>
      <Rotas news={news} setNews={setNews}/>
    </ChakraProvider>
    </>
  );
}

export default App
