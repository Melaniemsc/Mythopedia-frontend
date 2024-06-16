import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'))

  useEffect(()=>{
    setIsLoggedIn(localStorage.getItem('token'))
  },[location])

  function logout(){
    setIsLoggedIn(false)
    localStorage.removeItem('token')
  }

  return <nav className="navbar">
    <div className="navbar-menu is-active">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/" className="button is-light">Home</Link>
            <Link to="/characters" className="button is-light">Character List</Link>
            {!isLoggedIn &&<Link to="/signup" className="button is-primary">Sign Up</Link>}
            {!isLoggedIn &&<Link to="/login" className="button is-primary">Log In</Link>}
            {isLoggedIn &&<Link to="/your-team" className="button is-primary">Your Team</Link>}
            {isLoggedIn &&<button className="button" onClick={logout}>Logout</button>}
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar