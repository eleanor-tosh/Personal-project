import request from 'superagent'

const rootUrl = '/api/v1/dog/'

// export function getGreeting() {
//   return request.get('/greeting').then((res) => res.body.greeting)
// }

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

// export function addDog(dog) {
//   return request
//     .post('/api/v1/dog')
//     .send(dog)
//     .then((res) => {
//       return res.body
//     })
//     .catch(console.error)
// }

export function patchDog(dog_id, dog) {
  return request
    .patch(`/v1/dog/${dog_id}`)
    .send(dog)
    .then((res) => {
      return res.body
    })
    .catch(console.error)
}

// export function patchPoints(dog_id, dog) {
//   return request
//     .patch(`/v1/dog/${dog_id}`)
//     .send(dog)
//     .then((res) => {
//       return res.body
//     })
//     .catch(console.error)
// }
