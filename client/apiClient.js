import request from 'superagent'

const rootUrl = '/api/v1/dog/'

// change to get dogs
// export function getDogs() {
//   return request.get(`/api/v1/dog`).then((response) => response.body)
// }
export function getDogs() {
  return request.get(rootUrl).then((response) => {
    return response.body
  })
}

export function getOwners() {
  return request.get(`/api/v1/dog/mydetails/`).then((response) => {
    return response.body
  })
}

export function getShows() {
  return request.get(`/api/v1/dog/shows/`).then((response) => {
    return response.body
  })
}

export function getEvents() {
  return request.get(`/api/v1/dog/events/`).then((response) => {
    return response.body
  })
}

export function addDog(dog) {
  return request
    .post('/api/v1/dog/')
    .send(dog)
    .then((res) => {
      return res.body
    })
    .catch(console.error)
}

export function addShow(show) {
  return request
    .post('/api/v1/dog/shows/')
    .send(show)
    .then((res) => {
      return res.body
    })
    .catch(console.error)
}

export function deleteShow(show) {
  return request.delete(`/api/v1/dog/shows/${show}`).then((res) => {
    console.log(res.body)
    return res.body
  })
}

export function patchDog(dog_id, dog) {
  return request
    .patch(`/api/v1/dog/${dog_id}`)
    .send(dog)
    .then((res) => {
      return res.body
    })
    .catch(console.error)
}
