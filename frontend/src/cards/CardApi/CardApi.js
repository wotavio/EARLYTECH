import { Box } from "./styled";


function Cardmat({nome, url}) {
    return(
        <Box>
        <img src= {url} />
        <p>{nome}</p>
        </Box>
    )
}
export default Cardmat