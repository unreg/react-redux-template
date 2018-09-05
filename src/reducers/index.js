import { combineReducers } from 'redux';

import AppReducer from '../containers/app/reducer';


var reducers = combineReducers({
  AppState: AppReducer,
})


export default reducers;
