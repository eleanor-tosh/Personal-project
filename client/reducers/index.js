import { combineReducers } from 'redux'

import dogReducer from './dogDetails'
import ownerReducer from './ownerDetails'
import showReducer from './showDetails'

const allReducers = combineReducers({
  dogDetails: dogReducer,
  ownerDetails: ownerReducer,
  showDetails: showReducer,
})

// export default combineReducers({
//   dogDetails,
//   ownerDetails,
// })

export default allReducers
