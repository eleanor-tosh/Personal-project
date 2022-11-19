import { getDogs, patchDog } from '../apiClient.js'

export const SET_DOGS = 'SET_DOGS'
export const UPDATE_DOG = ' UPDATE_DOG'

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

export function updateDogDetails(id, count) {
  return (dispatch) => {
    return patchDog(id, count).then((dog) => {
      dispatch(patchDogDetails(dog))
    })
  }
}

export function patchDogDetails(dog) {
  return {
    type: UPDATE_DOG,
    payload: dog,
  }
}
