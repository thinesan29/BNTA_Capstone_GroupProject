import logo from './Logo.png';
import { Link } from 'react-router-dom'; 

const Header = () => { 
  return (
    <div className="header">
  <div className="header-logo-container">
    <img src={logo} alt="logo image" height="120" width="100" />
  </div>

  <div className="header-nav-container">
    <div className="header-nav">
      <Link to="/Home">Home</Link>
      <Link to="/MyList">MyList</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Admin">Admin</Link>
      <Link to="/Subscribe">Subscribe</Link>
    </div>

    <div className="header-search-container">
      <input type="search" placeholder="Search" />
    </div>
  </div>

  <div className="header-avatar-container">
    <img
      src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
      alt="Avatar"
      height="90"
    />
  </div>
</div>

  )
    
};

export default Header;
  