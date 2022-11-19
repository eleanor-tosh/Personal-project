import { SET_SHOWS } from '../actions'

const initialState = []

const showReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_SHOWS:
      return payload
    default:
      return state
  }
}

export default showReducer
