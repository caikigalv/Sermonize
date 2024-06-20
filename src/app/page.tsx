import { Colaborador } from "./components/Colaborador";
import { Footer } from "./components/Footer";
import { NossoServico } from "./components/Servico";
import Header from "./components/Header";
import Introducao from "./components/Introducao";
import Escolha from "./components/Escolha";

export default function Page(){
    return(
      <div className="overflow-hidden bg-bgColaborador ">
          <Header/>
          <Introducao />
          <Escolha />
          <NossoServico/>
          <Colaborador/>
          <Footer/>
      </div>
    )
}