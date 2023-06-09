import { Route, Routes, useLocation, useParams } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Section from "./Components/Header/Section";
import DineOut from "./Components/DineOut";
import NightLife from "./Components/NightLife";
import Delivery from "./Components/Delivery";

import Mockman from "mockman-js";
import Shimmer from "./Components/Shimmer";
import RestaurantDetails from "./Components/Restaurant/RestaurantDetails";
import { Login } from "./Components/Login/Login";
import { Toaster } from "react-hot-toast";
import { Cart } from "./Components/Cart/Cart";
import RequireAuth from "./Components/RequireAuth";
import WishList from "./Components/WIshList/WishList";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Profile/Profile";
import ProfileHome from "./Components/Profile/ProfileHome/ProfileHome";
import ProfileAddress from "./Components/Profile/ProfileAddress/ProfileAddress";
import { CheckOut } from "./Components/CheckOut/CheckOut";
import Home from "./Components/Home/Home";

/**
 * https://www.zomato.com/webroutes/getPage?page_url=/hyderabad/secunderabad-restaurants?place_name=Secunderabad
 *
 * https://www.zomato.com/webroutes/getPage?page_url=/hyderabad/secunderabad-restaurants?place_name=Secunderabad&dishv2_id=30308
 *
 * https://www.zomato.com/webroutes/getPage?page_url=pageUrl(from )
 *
 * https://www.zomato.com/webroutes/getPage?page_url=/hyderabad/mehfil-narayanguda/order&location=&isMobile=0 - Top brands
 */
function App(props) {
  const { pathname } = useLocation();
  const regex = /^\/restaurant\/\d+$/;
  console.log("pathname", pathname);
  console.log("useparams", useParams());
  return (
    <div className="App">
      <Header></Header>
      {[
        "/login",
        "/signup",
        "/cart",
        "/wishlist",
        "/profile",
        "/profile/",
        "/profile/address",
        "/checkout",
      ].includes(pathname) || regex.test(pathname) ? null : (
        <>
          <Section></Section>
        </>
      )}

      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{ top: "10%" }}
      />

      <Routes>
        <Route path="/dineout" element={<DineOut />} />
        <Route path="/nightlife" element={<NightLife />} />
        <Route path="/test" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        >
          <Route path="" element={<ProfileHome />} />
          <Route path="address" element={<ProfileAddress />} />
        </Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/delivery/shimmer" element={<Shimmer />} />
        <Route path="/restaurant/:rId" element={<RestaurantDetails />} />
        {["/delivery", "/delivery/:dishId"].map((path, index) => (
          <Route key={index} path={path} element={<Delivery />} />
        ))}
        {/* <Route path="/" element={<Delivery />}>
          <Route path="/:dishId" element={<Delivery />} />
          <Route path="address" element={<ProfileAddress />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
