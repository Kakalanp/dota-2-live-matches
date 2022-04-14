import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchMatchInfo } from "../redux/fetchMatchInfo/fetchMatchInfo";
import { translateGameMode, secondsToHms, date } from "../redux/extraMatchData";

export default function MatchInfo() {
  const { matchid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatchInfo(matchid));
  }, []);

  const info = useSelector((state) => state.info[0]);
  console.log(info);

  let winner = ''
  if(info !== undefined){
    info.radiant_win ? winner = 'Radiant' : winner = 'Dire';
  }


  return (
    <>
      {info !== undefined ? (
        <div>
          <div>
            <h1>{winner} Victory</h1>
          </div>
          <div>
            <h1>Match breakdown</h1>
            <div>
              <div>
                <p>{translateGameMode(info.game_mode)}</p>
              </div>
              <div>
                <p>{info.radiant_score}</p>
                <p>VS</p>
                <p>{info.dire_score}</p>
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
              <div>
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
