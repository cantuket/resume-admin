import { FETCH_MEETINGS} from '../actions/types'

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_MEETINGS:
      return  action.payload;
    default:
      return state
  }
}

