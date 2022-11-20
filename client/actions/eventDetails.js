import { getEvents } from '../apiClient.js'

export const SET_EVENTS = 'SET_EVENTS'

export function setEvents(events) {
  return {
    type: SET_EVENTS,
    payload: events,
  }
}

export function fetchEvents() {
  return (dispatch) => {
    return getEvents().then((events) => {
      dispatch(setEvents(events))
    })
  }
}
