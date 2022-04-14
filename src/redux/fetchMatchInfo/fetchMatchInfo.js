import { FETCH_MATCH_INFO } from '../actionTypes';

export const fetchMatchInfo = (id) => (dispatch) => {
  fetch(`https://api.opendota.com/api/matches/${id}`)
  .then((response) => response.json())
  .then((data) => dispatch({ type: FETCH_MATCH_INFO, data}))
}

export default function MatchInfoReducer(state = [], action) {
    const MatchInfo = [];
  switch (action.type) {
      default: return state;

      case FETCH_MATCH_INFO:
        MatchInfo.push(action.data);
        console.log(MatchInfo);
        return MatchInfo;
  }
}
