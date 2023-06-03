import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));

  const [token, setToken] = useState(localStorageToken?.token);

  const location = useLocation();
  const navigate = useNavigate();

  const signUpHandler = async (userDetails) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(userDetails),
      });
      const { createdUser, encodedToken } = await response.json();
      if (response.status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        setToken(encodedToken);
        toast.success("Successfully signed up! Kindly login to continue!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to sign up!");
    }
  };
  const loginHandler = async ({ email, password }) => {
    try {
      const authCall = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
      });

      const { foundUser, encodedToken } = await authCall.json();
      console.log("auth call", foundUser, encodedToken, authCall.status);

      if (authCall.status === 200) {
        console.log(foundUser, encodedToken);
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setToken(encodedToken);
        toast.success("Successfully signed in!");
        console.log("location", location);
        navigate(location?.state?.from?.pathname ?? "/delivery");
      } else if (authCall.status === 404) {
        toast.error("Invalid user and password");
      }
    } catch (error) {
      console.log(error);
      toast.error("");
    }
  };

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("loginDetails");
    toast.success("Logged out successfully!");
    navigate(location?.state?.from?.pathname ?? "/");
  };
  return (
    <AuthContext.Provider
      value={{ loginHandler, token, logOutHandler, signUpHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
}
