import { getOwners, patchOwner } from '../apiClient.js'

export const SET_OWNERS = 'SET_OWNERS'
export const UPDATE_OWNER = 'UPDATE_OWNER'

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

//EDIT OWNER
export function updateMyDetails(owner) {
  return (dispatch) => {
    return patchOwner(owner.owner_id, owner).then((owner) => {
      dispatch(patchMyDetails(owner))
    })
  }
}

export function patchMyDetails(owner) {
  return {
    type: UPDATE_OWNER,
    payload: owner,
  }
}
