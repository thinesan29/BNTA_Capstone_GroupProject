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
        <label>
          User:
          <input type="login-text" value={user} onChange={(e) => setUser(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="login-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="login-submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
