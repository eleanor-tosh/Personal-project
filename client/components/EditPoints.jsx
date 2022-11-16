import React, { useState } from 'react'

function EditPoints() {
  const [dogPoints, setDogPoints] = useState([
    { beg_points: '', int_points: '', sen_points: '', sdv_points: '' },
  ])

  const handleChange = (event) => {
    const { name, value } = event.target
    setDogPoints((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log(dogPoints)
  }

  return (
    <div>
      <h1>Edit Dog Points Form</h1>
      <form>
        <label>Beginner Points: </label>
        <input
          type="text"
          required
          name="dog_points"
          value={dog.beg_points}
          onChange={handleChange}
        />

        <label>Intermediate Points: </label>
        <input
          type="text"
          name="int_points"
          value={dog.int_points}
          onChange={handleChange}
        />

        <label>Senior Points: </label>
        <input
          type="text"
          required
          name="sen_points"
          value={dog.sen_points}
          onChange={handleChange}
        />

        <label>Advanced Points: </label>
        <input
          type="integer"
          name="adv_points"
          value={dog.adv_points}
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  )
}

export default EditPoints
