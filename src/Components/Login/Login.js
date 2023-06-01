import "./Login.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../index";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export const Login = () => {
  const { loginHandler } = useContext(AuthContext);

  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
  });

  const guestUserDetails = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  //   const handleInput = (e) =>
  //     setUserLoginDetails({
  //       ...userLoginDetails,
  //       [e.target.name]: e.target.value,
  //     });

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    loginHandler(userLoginDetails);
  };

  return (
    <div className="w-full max-w-full bg-transparent my-5">
      <section className="w-full max-w-max-c-h my-0 mx-auto relative">
        <div className="login_page">
          <h2 className="login_heading">Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <label>
              <h3>Email</h3>{" "}
              <input
                type="email"
                autoComplete="on"
                className="login_input"
                placeholder="bts@loveyourself.com"
                name="email"
                // onChange={handleInput}
              />
            </label>
            <label>
              <h3>Password</h3>
              <input
                // type={login ? "text" : "password"}
                className="login_input"
                placeholder="********"
                name="password"
                // onChange={handleInput}
              />
              <div className="login_btn_pwd">
                {/* {login ? <VisibilityOffIcon /> : <VisibilityIcon />} */}
              </div>
            </label>
            <button type="submit" className="login_btn login_btn_login">
              <h3>Login</h3>
            </button>
            <button
              type="submit"
              className="login_btn login_btn_test"
              onClick={() => setUserLoginDetails(guestUserDetails)}
            >
              <h3>Login with Test Credentials</h3>
            </button>
            <NavLink className="navlink" to="/signup">
              <button className="login_btn_new_acc">
                <h3>Create a new account</h3>
                <ChevronRightIcon />
              </button>
            </NavLink>
          </form>
        </div>
      </section>
    </div>
  );
};
