import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const RequireAuth = ({ children }) => {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  return token ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default RequireAuth;
