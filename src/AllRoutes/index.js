import React from "react";
import PublicRoutes from "./AllRoutes";
import Layout from "../Components/Layout/index";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeLayout from "../Components/Web/Layout/Index";
export default function index() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          path={prop.path}
          exact
          element={
            prop.path ? (
              <HomeLayout>
                <prop.component />
              </HomeLayout>
            ) : (
              <Navigate
                to={{
                  pathname: "/login",
                  // state: { from: props.location },
                }}
              />
            )
          }
          key={key}
        />
      );
    });
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        {getRoutes(PublicRoutes)}
      </Routes>
    </div>
  );
}
