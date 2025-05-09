import PropTypes from 'prop-types';
import ToggleSwitch from './ToggleSwitch';

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: props.bgColor, color: props.newColor }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: props.newColor }}>{props.title}</a>
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
              <a className="nav-link active" aria-current="page" href="/" style={{ color: props.newColor }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" style={{ color: props.newColor }}>{props.aboutText}</a>
            </li>
          </ul>

          {/* Dark Mode Button */}
          {/* <div className="d-flex align-items-center me-3">
            <button className="btn btn-primary" onClick={props.onClick}>
              {props.normalStyle.text}
            </button>
          </div> */}

          <div className='d-flex me-4'>
          <p>{props.normalStyle.text+' '}</p>
            
            <ToggleSwitch onchange={props.onClick}/>
           
          </div>




          {/* Search Form */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  newColor: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
  normalStyle: PropTypes.object,
};
