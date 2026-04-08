import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MyNavbar.css";
import { NavLink } from "react-router-dom";
import MoviesContext from "../../assets/Contexts";
import { FaHeart } from "react-icons/fa";
import Contact from "../../pages/Contact/Contact";

const MyNavbar = () => {
  const activeLink = ({ isActive }) => (isActive ? "text-white" : "navLink");
  const loved = useSelector((state) => state.loved.loved);

  return (
    <Navbar expand="lg" className="navbar">
      <Container className="">
        <Navbar.Brand href="/" className="logo">
          <img src="/images/logo.PNG" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navLinks ms-auto col-11 d-flex justify-content-between">
            <NavLink to="/" className={activeLink}>
              Home
            </NavLink>
            <NavLink to="/top-rated" className={activeLink}>
              Top Rated
            </NavLink>
            <NavLink to="/contact" className={activeLink}>
              Contact
            </NavLink>
            <NavLink to="/favourites" className={activeLink}>
              <div className="nav-love-wrapper">
                <FaHeart
                  className={`nav-love ${loved.length > 0 ? "loved" : ""}`}
                />
                {loved.length > 0 && (
                  <div className="loved-count">{loved.length}</div>
                )}
              </div>
            </NavLink>
            <NavLink to="/details" className={activeLink}></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
