import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "../pages/Portfolio/Portfolio";

const AppRoutes = () => {
  return (
     <Routes>
       <Route path="/" element={<Portfolio />} />
        <Route path="/not-found" element= { <h1>NOT FOUND</h1> } />        
        <Route path="/unexpected-error" element= { <h1>UNEXPECTED ERROR</h1> } /> 
     </Routes>
  );
};
export default AppRoutes;


