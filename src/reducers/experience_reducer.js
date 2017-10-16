import {
    CREATE_EXPERIENCE,
    FETCH_EXPERIENCE
  } from '../actions/types';
  
  export default function(state = {}, action) {
    switch(action.type) {
      case CREATE_EXPERIENCE:
        return { ...state };
      case FETCH_EXPERIENCE:
        return action.payload;
      default:
    }
  
    return state;
  }
  