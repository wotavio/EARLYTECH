import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CardPesquisa from "./cards/CardPesquisa/CardPesquisa";
import CardMateriais from "./cards/CardMateriais/CardMateriais";


export default function App() {
  return (
    <>
      <Header />
      <CardPesquisa />
      <CardMateriais />
      <Footer/>
    </>
  );
}
