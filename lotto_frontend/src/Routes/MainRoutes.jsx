import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Admin/Login/Login";
import { Dashoboard } from "../Admin/Dashboard/Dashoboard";

export const MainRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isTokenValid = localStorage.getItem("access_token");

  useEffect(() => {
    if (location.pathname === "/dashboard" && !isTokenValid) {
      navigate("/login");
    }
  }, [navigate, isTokenValid, location.pathname]);
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={isTokenValid ? <Dashoboard /> : null}
        />
      </Routes>
    </React.Fragment>
  );
};
