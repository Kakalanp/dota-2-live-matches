import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Matchlist from './fetchMatch/fetchMatch';

const store = createStore(Matchlist, applyMiddleware(thunk));

export default store;
