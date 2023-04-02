import logo from './Logo.png';
import { Link } from 'react-router-dom'; 
import React, { useEffect, useState } from "react"; //remove if errors


const Header = () => {
  const [show, handleShow] = useState(false); //added as show not defined 
  return (
    // double check line 7 as reference and corresponding line 39 tag - add CSS 
    <div className={`nav ${show ? "nav-black" : ""}`}>
    <div className="header">
      <div className="header-logo-image">
        <img
          src={logo}
          alt="logo image"
          height="120"
        />
      </div>

      <div id="header-container">
        <div className="header-nav">
          <Link to="/Home">Home</Link>
          <Link to="/MyList">MyList</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Admin">Admin</Link>
          <Link to="/Subscribe">Subscribe</Link>
        </div>

        <div>
          <input type="search" placeholder="Search" />
        </div>
      </div>

    <div className="header-avatar">
      <img
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
      </div>

    </div>
    </div>
  );
};

export default Header;
  