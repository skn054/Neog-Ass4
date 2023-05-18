import { useContext } from "react";
import { DeliveryContext } from "../Context/DeliveryContext";
import { NavLink } from "react-router-dom";
import DeliveryCard from "./DeliveryCard";

const Delivery = () => {
  const { favorites, brands, isLoading } = useContext(DeliveryContext);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <DeliveryCard favorites={favorites} favoriteFood />
      <DeliveryCard favorites={brands} brands />
    </>
  );
};

export default Delivery;
