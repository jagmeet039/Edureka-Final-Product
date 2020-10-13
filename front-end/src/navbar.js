import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style/navbar.css'

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to='/' className="navbar-brand">Edumato!</Link>
            </div>
            <ul className="nav navbar-nav navbar-right nav-side-text">
              <li><Link to='/'><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
              <li><Link to='/'><span className="glyphicon glyphicon-user"></span> Create an account</Link></li>
            </ul>
          </div>
        </nav>
    )
  }
}

export default Navbar