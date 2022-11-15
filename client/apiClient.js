import request from 'superagent'

// export function getGreeting() {
//   return request.get('/greeting').then((res) => res.body.greeting)
// }

// change to get dogs
export function getDogs() {
  return request.get(`/api/v1/dog`).then((response) => response.body)
}
