import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Grocerys from "../pages/Grocerys";
import GroceryDetails from "../pages/GroceryDetails";
import AddGrocery from "../pages/AddGrocery";
import EditGrocery from "../pages/EditGrocery";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Favorites from "../pages/Favorites";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/grocerys" element={<Grocerys />} />

      <Route
        path="/grocerys/:id"
        element={<GroceryDetails />}
      />

      <Route
        path="/favorites"
        element={<Favorites />}
      />

      <Route
        path="/add-grocery"
        element={
          <ProtectedRoute>
            <AddGrocery />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-grocery/:id"
        element={
          <ProtectedRoute>
            <EditGrocery />
          </ProtectedRoute>
        }
      />

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route path="/logout" element={<Logout />} />
      <Route path="/favs" element={<Favorites/>}/>
    </Routes>
  );
}

export default AppRoutes;