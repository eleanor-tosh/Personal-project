import { SET_OWNERS } from '../actions'

const initialState = []

const ownerReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_OWNERS:
      return payload
    default:
      return state
  }
}

export default ownerReducer
