import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './style/Nav.css'

export default function NAV(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/textform">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
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
                  TicTacToe
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Weather
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/accordian">
                      Accordians
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog">
                      Dragging
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/temp">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/">
                  Disabled
                </Link>
              </li>
            </ul>

            <div className="toggle" style={{display:'flex'}}>
              <div onClick={()=>{props.toggleMode('light')}} style = {{backgroundColor:'rgb(232 221 221)'}}></div>
              
              <div onClick={()=>{props.toggleMode('danger')}} style = {{backgroundColor:'red'}}></div>

              <div onClick={()=>{props.toggleMode('success')}} style = {{backgroundColor:'green'}}></div>

              <div onClick={()=>{props.toggleMode('primary')}} style = {{backgroundColor:'blue'}}></div>

              <div onClick={()=>{props.toggleMode('dark')}} style = {{backgroundColor:'black'}}></div>

              <div onClick={()=>{props.toggleMode('warning')}} style = {{backgroundColor:'rgb(255 178 11)'}}></div>
              
            </div>

            {/* <div className="form-check form-switch">
              <input
                onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
              >
                Enable Dark Mode
              </label>
            </div> */}
          </div>
        </div>
      </nav>

      {/* <ul className="App-header" style={{ height: 100 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul> */}
    </>
  );
}

NAV.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

NAV.defaultProps = {
  title: "Title",
  about: "About",
};
