import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Section from "./Components/Section";
import DineOut from "./Components/DineOut";
import NightLife from "./Components/NightLife";
import Delivery from "./Components/Delivery";
import { useContext } from "react";
import { DeliveryContext } from "./Context/DeliveryContext";

import Mockman from "mockman-js";
import Dishes from "./Components/Dishes";
/**
 * https://www.zomato.com/webroutes/getPage?page_url=/hyderabad/secunderabad-restaurants?place_name=Secunderabad
 *
 * https://www.zomato.com/webroutes/getPage?page_url=/hyderabad/secunderabad-restaurants?place_name=Secunderabad&dishv2_id=30308
 *
 * https://www.zomato.com/webroutes/getPage?page_url=pageUrl(from )
 *
 * https://www.zomato.com/webroutes/getPage?page_url=/hyderabad/mehfil-narayanguda/order&location=&isMobile=0 - Top brands
 */
function App() {
  const history = console.log("App");
  return (
    <div className="App">
      <Header />
      <Section />
      <Routes>
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/dineout" element={<DineOut />} />
        <Route path="/nightlife" element={<NightLife />} />
        <Route path="/test" element={<Mockman />} />
        <Route path="/:dishId" element={<Dishes />} />
      </Routes>
    </div>
  );
}

export default App;
