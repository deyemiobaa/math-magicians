import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.PureComponent {
  render() {
    return (
      <header className="navigation">
        <h1>Math Magicians</h1>
        <nav className="nav-links">
          <Link to="/" className="links">Home</Link>
          <Link to="/calculator" className="links">Calculator</Link>
          <Link to="/quote" className="links">Quote</Link>
        </nav>
      </header>
    );
  }
}

export default NavBar;
