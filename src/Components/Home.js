import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Section from "./Section";
import DineOut from "./DineOut";
import NightLife from "./NightLife";
import Delivery from "./Delivery";

import Mockman from "mockman-js";
import Shimmer from "./Shimmer";

const Home = () => {
  return (
    <>
      <Header />
      <Section />
      <Routes>
        {/* <Route path="/delivery" element={<Delivery />} /> */}
        <Route path="/dineout" element={<DineOut />} />
        <Route path="/nightlife" element={<NightLife />} />
        <Route path="/test" element={<Mockman />} />
        <Route path="/delivery/shimmer" element={<Shimmer />} />
        {/* <Route
          path="/delivery/:dishId"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Dishes />
            </Suspense>
          }
        /> */}

        {["/delivery", "/delivery/:dishId"].map((path) => (
          <Route path={path} element={<Delivery />} />
        ))}
      </Routes>
    </>
  );
};

export default Home;
