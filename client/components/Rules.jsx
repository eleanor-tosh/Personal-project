import React from 'react'

function Rules() {
  const handleClick = () => {
    window.alert("Uh, I'll get back to you on that one")
  }

  return (
    <>
      <h1>Flygility Rules</h1>

      <button onClick={handleClick}>Show me the rules</button>
    </>
  )
}

export default Rules
