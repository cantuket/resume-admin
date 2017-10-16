import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import authReducer from './auth_reducer'
import listingReducer from './listing_reducer'
import listingsReducer from './listings_reducer'
import meetingsReducer from './meetings_reducer'
import experiencesReducer from './experiences_reducer'
import experienceReducer from './experience_reducer'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  listings: listingsReducer,
  listing: listingReducer,
  meetings:meetingsReducer,
  experiences:experiencesReducer,
  experience:experienceReducer
})

export default rootReducer
