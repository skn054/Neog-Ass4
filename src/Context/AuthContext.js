import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));

  const [token, setToken] = useState(localStorageToken?.token);

  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = async ({ email, password }) => {
    try {
      const authCall = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
      });

      const { foundUser, encodedToken } = await authCall.json();
      console.log(foundUser, encodedToken);
      localStorage.setItem(
        "loginDetails",
        JSON.stringify({ user: foundUser, token: encodedToken })
      );
      setToken(encodedToken);
      toast.success("Successfully signed in!");
      console.log("location", location);
      navigate(location?.state?.from?.pathname ?? "/delivery");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("loginDetails");
    toast.success("Logged out successfully!");
    navigate(location?.state?.from?.pathname ?? "/");
  };
  return (
    <AuthContext.Provider value={{ loginHandler, token, logOutHandler }}>
      {children}
    </AuthContext.Provider>
  );
}
