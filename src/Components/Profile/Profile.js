import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const headings = ["Profile", "Address"];
  const routes = ["", "address"];

  return (
    <div className="profile_page">
      <ul className="profile_list">
        {headings?.map((heading, index) => (
          <li className="profile_list_item" key={index}>
            <NavLink
              to={`/profile/${routes[index]}`}
              className={({ isActive }) =>
                isActive ? "navlink active_navlink" : "navlink"
              }
            >
              <h2>{heading}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default Profile;
