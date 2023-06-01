import { Route, Routes, useLocation, useParams } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Section from "./Components/Section";
import DineOut from "./Components/DineOut";
import NightLife from "./Components/NightLife";
import Delivery from "./Components/Delivery";

import Mockman from "mockman-js";
import Shimmer from "./Components/Shimmer";
import RestaurantDetails from "./Components/RestaurantDetails";
import { Login } from "./Components/Login/Login";
import { Toaster } from "react-hot-toast";

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
      {["/login", "/signup", "/cart"].includes(pathname) ||
      regex.test(pathname) ? null : (
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
        <Route path="/delivery/shimmer" element={<Shimmer />} />
        <Route path="/restaurant/:rId" element={<RestaurantDetails />} />
        {["/delivery", "/delivery/:dishId"].map((path) => (
          <Route path={path} element={<Delivery />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
