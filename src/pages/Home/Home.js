import CardPesquisa from "../../cards/CardPesquisa/CardPesquisa";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardMateriais from "../../cards/CardMateriais/CardMateriais";
import CardRecomendado from "../../cards/CardRecomendado/CardRecomendado";
import CardProf from "../../cards/CardProf/CardProf";
import { Card } from "@chakra-ui/react";


function Home(props) {

    return ( <> 
    <Header/>
    <CardPesquisa/>
    <CardMateriais/>
    <CardRecomendado/>
    <CardProf/>
    <Card news={props.news}
    setNews={props.setNews}/>
    <Footer/>
    </>
    );
  }
  export default Home;
  