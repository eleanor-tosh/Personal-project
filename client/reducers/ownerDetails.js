import { SET_OWNERS, UPDATE_OWNER } from '../actions'

const initialState = []

const ownerReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_OWNERS:
      return payload
    case UPDATE_OWNER:
      return state.map((owner) => {
        if (owner.owner_id !== payload.owner_id) {
          return owner
        } else {
          return payload
        }
      })
    default:
      return state
  }
}

export default ownerReducer
