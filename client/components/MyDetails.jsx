import React from 'react'
import { Link } from 'react-router-dom'

function MyDetails() {
  return (
    <div>
      <h1>My Details</h1>

      <h2>Name: Eleanor Tosh</h2>
      <h2>Date Start: 19/11/2022</h2>
      <h2>Email: something@outlook.com</h2>
      <h2>Cell: 123 4567800</h2>
      <h2>Club: Southern Fly</h2>
      <h2>Dogs: Holly, Mera, Siren</h2>

      <Link to={`/`}>
        <button>Edit Details</button>
      </Link>
    </div>
  )
}

export default MyDetails

// import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchOwners } from '../actions'

// function MyDetails() {
//   const displayOwners = useSelector((state) => state.ownerDetails)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(fetchOwners())
//   }, [])

//   return (
//     <div>
//       <h1>My Details</h1>

//       {displayOwners.map((owner) => {
//         return (
//           <div key={owner.owner_id}>
//             <h1>{owner.firstname}</h1>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default MyDetails
