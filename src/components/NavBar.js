import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

export default function NavBar({ title, aboutText, mode, toggleMode, changeTheme }) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme={mode}
        // style={{ backgroundColor: mode === "dark" ? "dark" : "white" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  {aboutText}
                </Link>
              </li>
            </ul>
            
            {/* <div className="rounded-3 mx-2 bg-danger" style={{width: 30, height: 30}} onClick={() => changeTheme('danger')}></div>
            <div className="rounded-3 mx-2 bg-success" style={{width: 30, height: 30}} onClick={() => changeTheme('success')}></div>
            <div className="rounded-3 mx-2 bg-primary" style={{width: 30, height: 30}} onClick={() => changeTheme('primary')}></div>
            <div className="rounded-3 mx-2 bg-secondary" style={{width: 30, height: 30}} onClick={() => changeTheme('secondary')}></div>
             */}
            <div className={`form-check form-switch text-${mode === 'dark' ? 'light' : 'dark'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                onClick={toggleMode}
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

NavBar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About",
};
