import CardPesquisa from "../../cards/CardPesquisa/CardPesquisa";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardMateriais from "../../cards/CardMateriais/CardMateriais";
import CardRecomendado from "../../cards/CardRecomendado/CardRecomendado";
import CardProf from "../../cards/CardProf/CardProf";
import { Card } from "@chakra-ui/react";
import mateapi from "../../api/api.json"

function Home(props) {

    console.log(mateapi)
    return ( <> 
    <Header/>
    <CardPesquisa/>
    <CardMateriais/>
    {mateapi.map((dado) => {
      return(<>
        <CardRecomendado key={dado.id}
        url={dado.imagem}
        nome={dado.nome}
        />
      </>)
    })}
    <CardProf/>
    <Card news={props.news}
    setNews={props.setNews}/>
    <Footer/>
    </>
    );
  }
  export default Home;
  