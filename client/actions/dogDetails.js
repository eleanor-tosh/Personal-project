import { getDogs } from '../apiClient.js'

export const SET_DOGS = 'SET_DOGS'

export function setDogs(dogs) {
  return {
    type: SET_DOGS,
    payload: dogs,
  }
}

export function fetchDogs() {
  return (dispatch) => {
    return getDogs().then((dogs) => {
      dispatch(setDogs(dogs))
    })
  }
}
