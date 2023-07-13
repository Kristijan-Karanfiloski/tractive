import "./NavBar.css";
import logo from "../../assets/imges/navbar-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <div className="navbar-brand mx-auto">
          <img
            src={logo}
            alt="logo"
            className="d-inline-block align-middle pb-2 pt-2"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
