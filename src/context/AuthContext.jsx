// src/contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Inicializa com valor do localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const navigate = useNavigate();

  // Atualiza localStorage quando user muda
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = (username, password) => {
    if (username === "admin" && password === "admin") {
      const userData = { username: "admin" };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData)); // Garantia dupla
      navigate("/admin");
    } else {
      alert("Credenciais inválidas");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    // Forçar um redirecionamento completo para garantir
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);