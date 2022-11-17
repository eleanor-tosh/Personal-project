import request from 'superagent'

// export function getGreeting() {
//   return request.get('/greeting').then((res) => res.body.greeting)
// }

// change to get dogs
export function getDogs() {
  return request.get(`/api/v1/dog`).then((response) => response.body)
}

export function addDog(dog) {
  return request
    .post('/api/v1/dog')
    .send(dog)
    .then((res) => {
      return res.body
    })
    .catch(console.error)
}

export function patchDog(dog_id, dog) {
  return request
    .patch(`/v1/dog/${dog_id}`)
    .send(dog)
    .then((res) => {
      return res.body
    })
    .catch(console.error)
}

export function patchPoints(dog_id, dog) {
  return request
    .patch(`/v1/dog/${dog_id}`)
    .send(dog)
    .then((res) => {
      return res.body
    })
    .catch(console.error)
}
