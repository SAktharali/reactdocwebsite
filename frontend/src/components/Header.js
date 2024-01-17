import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <nav className="navbar header navbar-expand-lg navbar-light bg-white ">
      <div className="container">
        <Link to="/" className="navbar-brand text-dark f-logo">
          DOC CARE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link text-dark"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link text-dark">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/doctors" className="nav-link text-dark">
                Doctors
              </Link>
            </li>
            <li className="nav-item mb-1">
              <Link to="/appointments" className="nav-link text-dark">
                Appointments
              </Link>
            </li>
            <li className="nav-item mb-1">
              <Link to="/contact" className="nav-link text-dark">
                Contact
              </Link>
            </li>

            <Link className="nav-link text-dark border-bottom-0" to="/profile">
              {user?.name}
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
