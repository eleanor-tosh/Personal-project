import React from 'react'

function Clubs() {
  const handleClick = () => {
    window.alert("This form doesn't go anywhere, you cannot join a club")
  }

  return (
    <>
      <h1>Join a Club</h1>

      <form>
        <label>Club: </label>
        <select type="text" name="club">
          <option value="Southern Flygility">Southern Flygility</option>
          <option value="Waimak DTC Flygility">Waimak DTC Flygility</option>
          <option value="Blenheim Flygility and Dog Training">
            Blenheim Flygility and Dog Training
          </option>
          <option value="Wellington Dog Club">Wellington Dog Club</option>
          <option value="Auckland Flygility">Auckland Flygility</option>
        </select>

        <button onClick={handleClick}>Join</button>
      </form>
    </>
  )
}

export default Clubs
