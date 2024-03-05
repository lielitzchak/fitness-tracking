import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div className="logo">
        <Link to="/"><h1>Navbar</h1></Link>
        </div>
        <div className="menu-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/food">food</Link>
          </li>
          <li>
            <Link to="/Recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/report">Report problem component</Link>
          </li>
          <li>
            <Link to="/Gym Report">Gym Report</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </div>
      </div>
    </nav>
  );
};
export default Header;
