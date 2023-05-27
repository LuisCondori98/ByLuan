import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <h1 id="logo-nav" className="logo-nav" src="images/logo.png" alt="logo">- By Luan -</h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink className={({isActive}) => isActive? "ActiveLink" : "link"} to={"/"}>Inicio</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className={({isActive}) => isActive? "ActiveLink" : "link"} to={"/productos"}>Productos</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className={({isActive}) => isActive? "ActiveLink" : "link"} to={"/servicios"}>Servicios</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className={({isActive}) => isActive? "ActiveLink" : "link"} to={"/contacto"}>Contacto</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar