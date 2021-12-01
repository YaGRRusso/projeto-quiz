import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Temporizador.module.css'

interface PropsTemp {
  duracao: number
  tempoEsgotado: () => void
}

export default function Temporizador(props: PropsTemp) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        duration={props.duracao}
        size={80}
        isPlaying
        onComplete={props.tempoEsgotado}
        colors={[
          ['#BCE596', 0.33],
          ['#F7B801', 0.33],
          ['#D8594F', 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}