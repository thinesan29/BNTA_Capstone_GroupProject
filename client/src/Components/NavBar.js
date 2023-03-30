import logo from './Logo.png';
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo-image">
        <img
          src={logo}
          alt="logo image"
          height="120"
        />
      </div>

      <div id="nav-container">
        <div className="header-nav">
          < a href ="/Home">Home</a>
          <a href="/Movie">Movie</a>
          <a href="/MyList">MyList</a>
          <a href="/Login">Login</a>
          <a href="/Admin">Admin</a>
        </div>

        <div>
          <input type="search" placeholder="Search" />
        </div>
      </div>

    <div className="nav-avatar">
      <img
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
      </div>

    </div>
  );
};

export default NavBar;
  