import { Colaborador } from "./components/Colaborador";
import { Footer } from "./components/Footer";
import { NossoServico } from "./components/Servico";

export default function Page(){
    return(
      <div className="overflow-hidden ">
          <NossoServico/>
          <Colaborador/>
          <Footer/>
      </div>
    )
}