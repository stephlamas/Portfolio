import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<h1>404 Page not found</h1>} />
    </Routes>
  );
};
export default AppRoutes;
