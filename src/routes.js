import isAuthenticated from "authUser";
import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={(props) =>
        isAuthenticated() ? (
          <Element {...props} />
        ) : (
          <Navigate to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const Home = () => <h1>Hello World!</h1>;
const LoggedIn = () => <h1>Você está logado!</h1>;

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <PrivateRoute path="/app" element={<LoggedIn />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
