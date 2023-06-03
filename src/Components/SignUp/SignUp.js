import { useFormik } from "formik";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { AuthContext } from "../../Context/AuthContext";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter FirstName"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter LastName"),
  email: Yup.string().email("Invalid email").required("Please enter email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState({
    signUppassword: false,
    signUpconfirmPassword: false,
  });

  const { signUpHandler } = useContext(AuthContext);
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log("🚀 ~ file: SignUp.js:13 ~ SignUp ~ ̥:", values);
      signUpHandler(values);
      
    },
  });
  return (
    <div className="signUp_page">
      <h2 className="signUp_heading">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>First Name</h3>
          <input
            className="signUp_input"
            placeholder="First Name"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName ? (
            <p className="text-red-600">{errors.firstName}</p>
          ) : null}
        </label>
        <label>
          <h3>Last Name</h3>
          <input
            className="signUp_input"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName ? (
            <p className="text-red-600">{errors.lastName}</p>
          ) : null}
        </label>
        <label>
          <h3>Email</h3>{" "}
          <input
            type="email"
            className="signUp_input"
            placeholder="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email ? (
            <p className="text-red-600">{errors.email}</p>
          ) : null}
        </label>
        <label>
          <h3>Password</h3>
          <input
            type={showPassword.signUppassword ? "text" : "password"}
            className="signUp_input"
            placeholder="*********"
            name="password"
            id="password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && touched.password ? (
            <p className="text-red-600">{errors.password}</p>
          ) : null}
          <div
            className="signUp_btn_pwd"
            onClick={() =>
              setShowPassword((prevState) => ({
                ...prevState,
                signUppassword: !prevState.signUppassword,
              }))
            }
          >
            {showPassword.signUppassword ? (
              <VisibilityOffIcon />
            ) : (
              <VisibilityIcon />
            )}
          </div>
        </label>
        <label>
          <h3>Confirm Password</h3>
          <input
            type={showPassword.signUpconfirmPassword ? "text" : "password"}
            className="signUp_input"
            placeholder="*********"
            name="confirm_password"
            id="confirm_password"
            onChange={handleChange}
            value={values.confirm_password}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="text-red-600">{errors.confirm_password}</p>
          ) : null}
          <div
            className="signUp_btn_pwd"
            onClick={() =>
              setShowPassword((prevState) => ({
                ...prevState,
                signUpconfirmPassword: !prevState.signUpconfirmPassword,
              }))
            }
          >
            {showPassword.signUpconfirmPassword ? (
              <VisibilityOffIcon />
            ) : (
              <VisibilityIcon />
            )}
          </div>
        </label>
        <button type="submit" className="signUp_btn">
          <h3>Sign Up</h3>
        </button>
        <NavLink className="navlink" to="/login">
          <button className="signUp_btn_login">
            <h3>Already have an account? Login</h3>
            <ChevronRightIcon />
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default SignUp;
