import "./Login.css";
import { NavLink } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Please enter email"),
//   password: Yup.string().min(6).required("Please enter your password"),
// });
export const Login = () => {
  const { loginHandler } = useContext(AuthContext);

  // const [userLoginDetails, setUserLoginDetails] = useState({
  //   email: "",
  //   password: "",
  // });

  const [showPassword, setShowPassword] = useState(false);

  const guestUserDetails = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (val̥ues) => {
      console.log("🚀 ~ file: Login.js:25 ~ Login ~ val̥ues:", val̥ues);
      loginHandler(values);
    },
  });
  //   const handleInput = (e) =>
  //     setUserLoginDetails({
  //       ...userLoginDetails,
  //       [e.target.name]: e.target.value,
  //     });

  // const handleLoginSubmit = (e) => {
  //   e.preventDefault();

  //   loginHandler(userLoginDetails);
  // };

  return (
    <div className="w-full max-w-full bg-transparent my-5">
      <section className="w-full max-w-max-c-h my-0 mx-auto relative">
        <div className="login_page">
          <h2 className="login_heading">Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <h3>Email</h3>{" "}
              <input
                type="email"
                autoComplete="on"
                className="login_input"
                placeholder="bts@loveyourself.com"
                name="email"
                id="email"
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <p className="text-red-600">{errors.email}</p>
              ) : null}
            </label>
            <label>
              <h3>Password</h3>
              <input
                type={showPassword ? "text" : "password"}
                className="login_input"
                placeholder="********"
                name="password"
                id="password"
                onChange={handleChange}
              />
              {errors.password && touched.password ? (
                <p className="text-red-600">{errors.password}</p>
              ) : null}
              <div
                className="login_btn_pwd"
                onClick={() => setShowPassword((prevState) => !prevState)}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </div>
            </label>
            <button type="submit" className="login_btn login_btn_login">
              <h3>Login</h3>
            </button>
          </form>
          <button
            type="submit"
            className="login_btn login_btn_test"
            onClick={() => loginHandler(guestUserDetails)}
          >
            <h3>Login with Test Credentials</h3>
          </button>
          <NavLink className="navlink" to="/signup">
            <button className="login_btn_new_acc">
              <h3>Create a new account</h3>
              <ChevronRightIcon />
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};
