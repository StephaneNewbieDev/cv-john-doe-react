import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <NavLink
          className="navbar-brand d-flex align-items-center gap-4"
          to="/"
          aria-label="Accueil"
        >
          <img
            src="/apple-touch-icon.png"
            alt="Logo John Doe"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          <span className="fw-bold text-white text-uppercase">John Doe</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Réalisations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Me contacter
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
