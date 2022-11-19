import { SET_DOGS, SET_OWNERS } from '../actions'

const initialState = []

const reducers = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_DOGS:
      return payload
    case SET_OWNERS:
      return payload
    default:
      return state
  }
}

export default reducers
