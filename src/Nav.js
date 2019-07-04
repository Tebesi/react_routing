import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
      <nav>
        <h3>I Can is Stronger than IQ</h3>
        <ul className="nav-link">
             <Link className="nav-link-item"to='/login'> <li>Login</li></Link>
              <Link className="nav-link-item"to='/userform'><li>Application</li></Link>
             <Link className="nav-link-item"to='/form'><li>Controlled Form</li></Link>
              <Link className="nav-link-item"to='/counter'><li>Counter</li></Link>
        </ul>
     </nav>
  )
}

export default Nav
