import styles from '../styles/pages/Leaderboard.module.css'
import Head from 'next/head'

export default function Leaderboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leaderboard | Moveit</title>
      </Head>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>POSIÇÃO</th>
            <th>USUÁRIO</th>
            <th>DESAFIOS</th>
            <th>EXPERIÊNCIA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src="https://github.com/helderavila.png" alt="Helder Avila"/>
              <div>
                <strong>Helder Avila</strong>
                <p>Level 43</p>
              </div>
            </td>
            <td>
              <span>127</span> completados
            </td>
            <td>
              <span>15000</span> xp
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}