import { combineReducers } from 'redux'

import dogReducer from './dogDetails'
import ownerReducer from './ownerDetails'
import showReducer from './showDetails'
import eventReducer from './eventDetails'

const allReducers = combineReducers({
  dogDetails: dogReducer,
  ownerDetails: ownerReducer,
  showDetails: showReducer,
  eventDetails: eventReducer,
})

// export default combineReducers({
//   dogDetails,
//   ownerDetails,
// })

export default allReducers
