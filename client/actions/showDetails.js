import { getShows } from '../apiClient.js'

export const SET_SHOWS = 'SET_SHOWS'

export function setShows(shows) {
  return {
    type: SET_SHOWS,
    payload: shows,
  }
}

export function fetchShows() {
  return (dispatch) => {
    return getShows().then((shows) => {
      dispatch(setShows(shows))
    })
  }
}
