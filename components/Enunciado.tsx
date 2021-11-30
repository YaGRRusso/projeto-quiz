import styles from '../styles/Enunciado.module.css'

interface PropsEnun{
  texto: string
}

export default function Enunciado(props: PropsEnun) {
  return (
    <div className={styles.enunciado}>
      <h1 className={styles.texto}>{props.texto}</h1>
    </div>
  )
}