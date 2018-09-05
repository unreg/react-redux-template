import * as types from '../../actions';


export function setAppCurrentTime(data) {
  return {
    type: types.SET_APP_CURRENT_TIME,
    data
  };
}
