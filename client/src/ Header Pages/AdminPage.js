import { Link } from "react-router-dom";


const AdminPage = () => {
    return(
      <div className="admin-container">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 className="admin-title">Welcome, Admin</h2>
        <p className="admin-description">As an admin, you can easily manage the movie and cast database.</p>
        <p className="admin-description">To add or remove movies from the database, simply click on the "Movie".</p>
        <p className="admin-description">To add or remove cast members from the database, click on the "Cast".</p>
        <Link to="/Admin/Manage/Movie" className="admin-link">Manage Movies</Link>
        <Link to="/Admin/Manage/Cast" className="admin-link">Manage Casts</Link>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
}

export default AdminPage;