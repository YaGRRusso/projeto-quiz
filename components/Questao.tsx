import QuestaoModel from "../model/questao";
import styles from '../styles/Questao.module.css'

interface PropsQuestao {
  valor: QuestaoModel
}

export default function Questao(props: PropsQuestao) {
  const questao = props.valor

  return (
    <div className={styles.questao}>
      <h1>Questao</h1>
    </div>
  )
}