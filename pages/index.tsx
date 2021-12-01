import { useState } from "react";
import Enunciado from "../components/Enunciado";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";
// import styles from '../styles/...'

const val =
  new QuestaoModel(0, 'Qual a maneira correta de se escrever um IF?', [
  RespostaModel.errada('if x = 10 {}'),
  RespostaModel.errada('if x = 10 then{}'),
  RespostaModel.errada('if (x = 10) then{}'),
  RespostaModel.certa('if (x = 10) {}')
])

export default function Index() {
  const [questao, setQuestao] = useState(val)

  function respostaFornecida(indice:number) {
    setQuestao(questao.responderCom(indice))
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>

      <Questao valor={questao} respostaFornecida={respostaFornecida}/>

    </div>
  )
}