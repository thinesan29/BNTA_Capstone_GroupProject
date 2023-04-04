import logo from './Logo.png';
import video from './video.mp4'
import { Link } from 'react-router-dom'; 

const Header = () => { 
  return (
    <div className="header">
  <div className="header-logo-container">
  <img src="https://i.imgur.com/NzIiXNq.png" alt="Blockbuster.gif" height="50"/>
  <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTJkNzU1ZmQyZDU3M2UyZTM2MjljNGVhNDExNzU1MThmNWI0NmEyMCZjdD1z/KAeUm0GNLIP3VNOFu9/giphy.gif"alt="Popcorn.gif" height="65"/>
  </div>

    {/* fix popcorn gif so it's on same level as blockbuster reborn logo */}

  <div className="header-nav-container">
    <div className="header-nav">
      <Link to="/Home">Home</Link>
      <Link to="/MyList">MyList</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Admin">Admin</Link>
      <Link to="/Subscribe">Subscribe</Link>
      <div className="header-search">
      <input type="search" placeholder="Search" />
      </div>
      <div className="header-avatar-container">
    <img
      src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
      alt="Avatar"
      height="90"
    />
  </div>
    </div>
    </div>


</div>

  )
    
};

export default Header;
  