import '../styles/global.css';

import {ChallengesProvider, CharllengesContext} from '../contexts/ChallengesContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  return (
        <Component {...pageProps} />    
  )
  }

export default MyApp
