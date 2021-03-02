import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { CharllengeBox } from '../components/CharllengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.container}>     
      <Head>
        <title>Inicio | Move.IT</title>
      </Head>
      
      <ExperienceBar/>
      <CountdownProvider>
        <section>
          <div >
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
          </div>
          <div >
            <CharllengeBox/>
          </div>
        </section>
      </CountdownProvider>
    
    </div>
  )
}
