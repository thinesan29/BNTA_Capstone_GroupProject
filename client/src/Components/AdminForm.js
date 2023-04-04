import { useState } from "react";
import { Link } from "react-router-dom";

const AdminForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="login-container">
      <h2> Admin Login</h2>
      <form>
      <div className="login-element">
        <label>
          User:
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        </label>
        </div>
        <div className="login-element">
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        </div>
        <Link to="/Admin/Manage">
        <button>Log in </button>
        </Link>
      </form>
    </div>
  );
};

export default AdminForm;
