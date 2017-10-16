import {
    FETCH_EXPERIENCES
  } from '../actions/types';
  
  export default function(state = {}, action) {
    switch(action.type) {
      case FETCH_EXPERIENCES:
        return action.payload;
      default:
    }
  
    return state;
  }
  