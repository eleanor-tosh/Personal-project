import { SET_SHOWS, DELETE_SHOW } from '../actions'

const initialState = []

const showReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_SHOWS:
      return payload
    case DELETE_SHOW:
      return state.filter((show) => {
        return show.show_id !== payload
      })
    default:
      return state
  }
}

export default showReducer
