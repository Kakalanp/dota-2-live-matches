import { FETCH_MATCH_LIST } from '../actionTypes';

export const fetchMatchList = () => (dispatch) => {
    fetch('https://api.opendota.com/api/live')
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH_MATCH_LIST, data}))
}

export default function MatchReducer(state = [], action) {
    const MatchIDs = [];
  switch (action.type) {
      default: return state;

      case FETCH_MATCH_LIST:
        let i = 0;
        while(i < 20) {
            MatchIDs.push(action.data[i].match_id);
            i += 1;
        }
        console.log(MatchIDs);
        return MatchIDs;
  }
}
