import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Shimmer } from "../Shimmer";

const Home = () => {
  const navigate = useNavigate();

  console.log("Home component");
  //   navigate("/delivery", { replace: true });
  useEffect(() => {
    setTimeout(() => {
      // 👇 Redirects to about page, note the `replace: true`
      navigate("/delivery", { replace: true });
    }, 3000);
  }, [navigate]);
  return (
    <>
      <Shimmer />
    </>
  );
};

export default Home;
