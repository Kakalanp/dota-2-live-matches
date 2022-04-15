import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchMatchInfo } from '../redux/fetchMatchInfo/fetchMatchInfo';
import { translateGameMode, secondsToHms, date } from '../redux/extraMatchData';

import styles from '../styles/MatchInfo.module.css';
import back from '../assets/back.png';

export default function MatchInfo() {
  const { matchid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatchInfo(matchid));
  }, []);

  const info = useSelector((state) => state.info[0]);

  return (
    <>
      <Link className={styles.goBack} to="/dota-2-live-matches/"><img src={back} alt="Go back" /></Link>
      {info !== undefined ? (
        <div>
          {info.radiant_win
            ? <h1 className={styles.title} victory="Radiant">Radiant Victory</h1>
            : <h1 className={styles.title} victory="Dire">Dire Victory</h1>}
          <div>
            <h1 className={styles.subTitle}>Match breakdown :</h1>
            <div className={styles.breakdown}>
              <div className={styles.gameMode}>
                <p>{translateGameMode(info.game_mode)}</p>
              </div>
              <div>
                <p className={styles.score}>{info.radiant_score}</p>
                <p>VS</p>
                <p className={styles.score}>{info.dire_score}</p>
              </div>
              <div>
                <p>Duration:</p>
                <p>{secondsToHms(info.duration)}</p>
              </div>
              <div>
                <p>Date and time:</p>
                <p>{date(info.start_time)}</p>
              </div>
              <div>
                <p>Match ID:</p>
                <p>6512361923</p>
              </div>
              <div className={styles.download}>
                <a href={info.replay_url}>DOWNLOAD REPLAY</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Retrieving match data...</p>
      )}
    </>
  );
}
