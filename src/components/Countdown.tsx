import {  useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';

// Styles
import styles from '../styles/components/Countdown.module.css'
import { MdPlayArrow, MdClose, MdCheckCircle } from 'react-icons/md'


export function Countdown() {

  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCoutdown 
  } = useContext(CountdownContext)
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
          <MdCheckCircle size="22" color="#4CD62B"/>
        </button>
      ) : (
          <>
            {isActive ? (
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCoutdown}
              >
                Abandonar ciclo
                <MdClose size="22"/>
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  Iníciar um ciclo
                  <MdPlayArrow size="22"/>
                </button>
              )}
          </>
        )}
    </div>
  )
}