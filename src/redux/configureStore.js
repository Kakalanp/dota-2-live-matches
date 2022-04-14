import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import MatchListReducer from './fetchMatchList/fetchMatchList';
import MatchInfoReducer from './fetchMatchInfo/fetchMatchInfo';

const store = createStore(combineReducers({ list: MatchListReducer, info: MatchInfoReducer}), applyMiddleware(thunk));

export default store;
