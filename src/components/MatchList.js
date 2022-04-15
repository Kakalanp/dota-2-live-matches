import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchMatchList } from '../redux/fetchMatchList/fetchMatchList';
import minimap from '../assets/Minimap.png';
import styles from '../styles/MatchList.module.css';

export default function Matchlist() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMatchList());
  }, []);

  const list = useSelector((state) => state.list);
  let count = 1;

  return (
    <div>
      <h1 className={styles.title}>Top Dota 2 live Matches</h1>
      <div className={styles.list}>
        {list.map((match) => {
          if (count > 1) {
            if (count === 3) {
              count = 0;
            } else {
              count += 1;
            }
            return (
              <Link to={`/dota-2-live-matches/matchinfo/${match}`} key={match} color="true">
                <img src={minimap} alt="dota 2's minimap" />
                <h5 className={styles.matchId}>
                  Match id :
                  {' '}
                  <strong>{match}</strong>
                </h5>
              </Link>
            );
          }
          count += 1;
          return (
            <Link to={`/dota-2-live-matches/matchinfo/${match}`} key={match} color="false">
              <img src={minimap} alt="dota 2's minimap" />
              <h5 className={styles.matchId}>
                Match id :
                {' '}
                <strong>{match}</strong>
              </h5>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
