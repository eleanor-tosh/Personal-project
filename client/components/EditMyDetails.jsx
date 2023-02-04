import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateMyDetails } from '../actions'

function EditMyDetails() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { owner_id } = useParams()
  const displayOwner = useSelector((state) => state.ownerDetails)

  const [myDetails, setMyDetails] = useState(null)

  useEffect(() => {
    const selectedOwner = displayOwner.find(
      (owner) => owner_id == owner.owner_id
    )
    setMyDetails(selectedOwner)
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setMyDetails({ ...myDetails, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(updateMyDetails(myDetails))
    navigate('/mydetails')
  }

  if (!myDetails) {
    return <div></div>
  } else {
    return (
      <div>
        <form>
          <h1>Edit My Details</h1>
          <label>Firstname: </label>{' '}
          <input
            type="text"
            name="firstname"
            value={myDetails.firstname}
            maxLength={50}
            onChange={handleChange}
          />
          <label>Lastname: </label>
          <input
            type="text"
            name="lastname"
            value={myDetails.lastname}
            maxLength={50}
            onChange={handleChange}
          />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={myDetails.email}
            maxLength={50}
            onChange={handleChange}
          />
          <label>Cellphone: </label>
          <input
            type="string"
            name="cell"
            value={myDetails.cell}
            maxLength={50}
            onChange={handleChange}
          />
          <label>Club: </label>
          <input
            type="text"
            name="club"
            value={myDetails.club}
            maxLength={50}
            onChange={handleChange}
          />
        </form>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
    )
  }
}

export default EditMyDetails
