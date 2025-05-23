import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <NavLink
            to="/"
            className="navbar-brand fw-bold text-light text-center text-lg-start"
            style={{ textDecoration: "none" }}
          >
            Min App
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav text-white text-center text-lg-start">
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link"
                  activeclassname="active"
                  style={{ textDecoration: "none" }}
                >
                  Tjänster
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeclassname="active"
                  style={{ textDecoration: "none" }}
                >
                  Om oss
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  activeclassname="active"
                  style={{ textDecoration: "none" }}
                >
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
