import QuestaoModel from '../model/questao'
import styles from '../styles/Questionario.module.css'

interface QuestionarioProps {
    questao: QuestaoModel
    
}


export default function Questionario(props: QuestionarioProps) {
  return (
    <div className={styles.questionario}>

    </div>
  )
}