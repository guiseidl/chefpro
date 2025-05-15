import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      onLogin();
      navigate("/admin/lista");
    } else {
      setError("Usuário ou senha incorretos.");
    }
  };

  return (
    <div className="no-sidebar login-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: "1" }}>
        <h1>Login ChefPro</h1>
        {error && <p className="error" style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="primary">
            Entrar
          </button>
        </form>
      </div>
      
      {/* Rodapé */}
      <footer style={{
        marginTop: "auto",
        padding: "20px",
        textAlign: "center",
        borderTop: "1px solid #ddd",
        backgroundColor: "#f8f8f8"
      }}>
        <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
          <strong>Unicesumar - ADS</strong><br />
          Guilherme Seidl | Vagner Giraldino
        </p>
      </footer>
    </div>
  );
};

export default Login;