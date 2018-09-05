import * as types from '../../actions/';


const initialState = {
  AppData: {
    currentTime: ''
  }
}


const AppReducer = function(state=initialState, action) {
  switch(action.type) {

    case types.SET_APP_CURRENT_TIME:
      return Object.assign({}, state, {
        AppData: Object.assign({}, state.AppData, {
          currentTime: action.data
        })
      });

    default: return state;
  }
}


export default AppReducer;