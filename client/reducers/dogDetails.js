import { SET_DOGS, UPDATE_DOG } from '../actions'

const initialState = []

const dogReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_DOGS:
      return payload
    case UPDATE_DOG:
      return state.map((dog) => {
        if (dog.dog_id !== payload.dog_id) {
          return dog
        } else {
          return payload
        }
      })
    default:
      return state
  }
}

export default dogReducer
