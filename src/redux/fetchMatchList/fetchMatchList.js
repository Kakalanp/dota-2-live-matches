import { FETCH_MATCH_LIST } from '../actionTypes';

export const fetchMatchList = () => (dispatch) => {
  console.log('Fetch')
    fetch('https://api.opendota.com/api/live')
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH_MATCH_LIST, data}))
}

export default function MatchListReducer(state = [], action) {
    const MatchIDs = [];
    let i = 0;
  switch (action.type) {
      default: return state;

      case FETCH_MATCH_LIST:
        while(i < 20) {
            MatchIDs.push(action.data[i].match_id);
            i += 1;
        }
        i = 0;
        return MatchIDs;
  }
}
