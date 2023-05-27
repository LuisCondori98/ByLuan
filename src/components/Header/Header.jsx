import "./Header.css"
import { Link } from "react-router-dom";
import NavBar from "../Navbar/NavBar"

const Header = () => {

  window.onscroll = () => {scrollFunction()};

  const scrollFunction = () => {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
      document.getElementById("header").style.padding = "0px";
      document.getElementById("logo").style.height = "100px";
      document.getElementById("logo").style.display = "none";
      document.getElementById("logo-nav").style.display = "inline-block";
    } else {
      document.getElementById("header").style.padding = "0px";
      document.getElementById("logo").style.height = "200px";
      document.getElementById("logo").style.display = "inline-block";
      document.getElementById("logo-nav").style.display = "none";
    }
  }

  return (
    <div id="header" className="header">
        <Link to="/"><img id="logo" className="logo" src="images/logo.png" alt="logo"/></Link>
        <NavBar />
    </div>
  )
}

export default Header