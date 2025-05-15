import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import RecipeDetails from "../pages/RecipeDetails";
import Login from "../pages/Login";
import AdminLayout from "../pages/admin/AdminLayout";
import NewRecipe from "../pages/admin/NewRecipe";
import RecipeList from "../pages/admin/RecipeList";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/receitas" element={<Recipes />} />
      <Route path="/receita/:id" element={<RecipeDetails />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route path="nova" element={<NewRecipe />} />
        <Route path="lista" element={<RecipeList />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
