import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Logged in as ${user}...`);
    setUser("");
    setPassword("");
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
