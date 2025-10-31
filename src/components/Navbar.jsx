import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🇮🇩</span>
          <span className="logo-text">Javanese Emotion</span>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>
              About Javanese
            </Link>
          </li>
          <li>
            <Link to="/demo" className={`nav-link ${isActive('/demo')}`}>
              Try Demo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
