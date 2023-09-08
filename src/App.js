import Cadastro from "./pages/Cadastro/cadastro";
import {ChakraProvider, extendTheme} from "@chakra-ui/react"
import Login from "./pages/Login/Login";

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
      {/* <Cadastro/> */}
      <Login/>
      {/* <Home/> */}
    </ChakraProvider>
    </>
  );
}

export default App
