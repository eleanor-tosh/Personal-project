import { getOwners } from '../apiClient.js'

export const SET_OWNERS = 'SET_OWNERS'

export function setOwners(owners) {
  return {
    type: SET_OWNERS,
    payload: owners,
  }
}

export function fetchOwners() {
  return (dispatch) => {
    return getOwners().then((owners) => {
      dispatch(setOwners(owners))
    })
  }
}
