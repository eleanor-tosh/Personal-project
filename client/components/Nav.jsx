import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navigation">
      <h2>Nav</h2>
      <ul className="navList">
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/mydogs" activeclassname="active">
            My Dogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/mydetails" activeclassname="active">
            My Details
          </NavLink>
        </li>
        <li>
          <NavLink to="/myevents" activeclassname="active">
            My Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/upcomingevents" activeclassname="active">
            Upcoming Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/clubs" activeclassname="active">
            Clubs
          </NavLink>
        </li>{' '}
        <li>
          <NavLink to="/rules" activeclassname="active">
            Rules
          </NavLink>
        </li>
        <li>
          <NavLink to="/createshowform" activeclassname="active">
            Create Show
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
