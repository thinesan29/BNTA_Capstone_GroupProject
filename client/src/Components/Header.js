import logo from './Logo.png';

const Header = () => {
  return (
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

    <div className="header-avatar">
      <img
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
      </div>

    </div>
  );
};

export default Header;
  