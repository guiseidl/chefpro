import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import RecipeList from "./pages/admin/RecipeList";
import NewRecipe from "./pages/admin/NewRecipe";
import RecipeDetail from "./pages/admin/RecipeDetail";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Routes>
      <Route path="/admin/recipes/:id" element={<RecipeDetail />} />
      <Route path="/admin" element={<AdminLayout onLogout={handleLogout} />}>
        <Route path="lista" element={<RecipeList />} />
        <Route path="nova" element={<NewRecipe />} />
        <Route index element={<Navigate to="lista" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin/lista" replace />} />
    </Routes>
  );
};

export default App;
