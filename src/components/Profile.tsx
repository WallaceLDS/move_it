import { useContext } from 'react';
import { CharllengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const {level} = useContext(CharllengesContext);


    return(
        <div className={styles.profileContainer}>
            <img src="http://github.com/WallaceLds.png" alt="Wallace Lima"></img>
            <div>
                <strong>Wallace Lima</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}

