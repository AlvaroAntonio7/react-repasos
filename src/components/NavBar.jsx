import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Rent A Car</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to='/' className="nav-link"  >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/crudyforms' className="nav-link" >Crud y Form</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/crudyforms' className="nav-link" >Clients</NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
