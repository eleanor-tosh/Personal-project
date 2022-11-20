import { SET_EVENTS } from '../actions'

const initialState = []

const eventReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_EVENTS:
      return payload
    default:
      return state
  }
}

export default eventReducer
