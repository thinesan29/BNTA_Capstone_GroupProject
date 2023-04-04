const NavBar = () => {
  return (
    <div className="navBar">
      <div className="popcorn-container">
      <div className="popcorn-gif">
      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTJkNzU1ZmQyZDU3M2UyZTM2MjljNGVhNDExNzU1MThmNWI0NmEyMCZjdD1z/KAeUm0GNLIP3VNOFu9/giphy.gif"alt="Popcorn.gif" height="65"/>
      </div>
      </div>
      <a href="/Blockbuster_Originals">Blockbuster Originals</a>
      <a href="/Top_Rated">Top Rated</a>
      <a href="/Action">Action</a>
      <a href="/Comedy">Comedy</a>
      <a href="/Documentaries">Documentaries</a>
      <a href="/Horror">Horror</a>
    </div>
  );
};
export default NavBar;