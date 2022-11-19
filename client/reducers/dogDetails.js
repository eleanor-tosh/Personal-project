import { SET_DOGS } from '../actions'

const initialState = []

const dogReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_DOGS:
      return payload
    default:
      return state
  }
}

export default dogReducer
