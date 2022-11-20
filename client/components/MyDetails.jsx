import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOwners } from '../actions'

function MyDetails() {
  const displayOwnerDetails = useSelector((state) => state.ownerDetails)
  const dispatch = useDispatch()
  const owner_id = 100001

  useEffect(() => {
    dispatch(fetchOwners())
  }, [])

  const selectedOwnerDetails = displayOwnerDetails.find(
    (owner) => owner_id === owner.owner_id
  )
  if (!selectedOwnerDetails) {
    return <div></div>
  }
  const started = new Date(selectedOwnerDetails.started).toDateString()

  return (
    <div className="mydetails">
      <h1>My Details</h1>
      {selectedOwnerDetails && (
        <div>
          <h2>
            Name: {selectedOwnerDetails.firstname}{' '}
            {selectedOwnerDetails.lastname}
          </h2>
          <h2>Date Started: {started}</h2>
          <h2>Email: {selectedOwnerDetails.email}</h2>
          <h2>Cell: {selectedOwnerDetails.cell}</h2>
          <h2>Club: {selectedOwnerDetails.club}</h2>
          <Link to={`/`}>
            <button>Edit Details</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default MyDetails
