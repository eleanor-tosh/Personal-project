import { combineReducers } from 'redux'

import dogReducer from './dogDetails'
import ownerReducer from './ownerDetails'

const allReducers = combineReducers({
  dogDetails: dogReducer,
  ownerDetails: ownerReducer,
})

// export default combineReducers({
//   dogDetails,
//   ownerDetails,
// })

export default allReducers
