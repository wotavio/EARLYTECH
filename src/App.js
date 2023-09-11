import {ChakraProvider, extendTheme} from "@chakra-ui/react"
import Rotas from "./Rotas/Rotas";

function App(){
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
    </ChakraProvider>
    </>
  );
}

export default App
