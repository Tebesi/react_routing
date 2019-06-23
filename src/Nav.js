import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
      <nav>
        <h3>I Can is Stronger than IQ</h3>
        <ul className="nav-link">
             <Link to='/login'> <li>Login</li></Link>
              <Link to='application'><li>Application</li></Link>
             <Link to='form'><li>Controlled Form</li></Link>
              <Link to='counter'><li>Counter</li></Link>
        </ul>
     </nav>
  )
}

export default Nav
