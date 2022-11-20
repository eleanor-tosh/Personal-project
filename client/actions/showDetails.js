import { getShows, addShow, deleteShow } from '../apiClient.js'

export const SET_SHOWS = 'SET_SHOWS'
export const ADD_SHOW = 'ADD_SHOW'
export const DELETE_SHOW = 'DELETE_SHOW'

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

//ADD
export function submitShow(shows) {
  return (dispatch) => {
    return addShow(shows).then((shows) => {
      dispatch(setShows(shows))
    })
  }
}

//DELETE
// export function removeShow(shows) {
//   return {
//     type: DELETE_SHOW,
//     payload: shows,
//   }
// }

export function removeShow(show) {
  return (dispatch) => {
    return deleteShow(show).then((updatedShows) => {
      dispatch(setShows(updatedShows))
    })
  }
}
