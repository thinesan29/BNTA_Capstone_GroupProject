import { Link } from "react-router-dom";

const AdminPage = () => {
    return(
    <>
    <h2>Admin</h2>
    <p>As an admin, you can easily manage the movie and cast database.</p>
    <p>To add or remove movies from the database, simply click on the "Movie".</p>
    <p>To add or remove cast members from the database, click on the "Cast".</p>
    <Link to="/Admin/Movie">Movie</Link>
    <Link to="/Admin/Cast">Casts</Link>
    </>
    )
}

export default AdminPage;