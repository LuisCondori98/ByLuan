import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <h1 id="logo-nav" className="logo-nav" src="images/logo.png" alt="logo">- By Luan -</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive? "ActiveLink" : "link"} to={"/"}>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive? "ActiveLink" : "link"} to={"/productos"}>Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive? "ActiveLink" : "link"} to={"/servicios"}>Servicios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive? "ActiveLink" : "link"} to={"/contacto"}>Contacto</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar