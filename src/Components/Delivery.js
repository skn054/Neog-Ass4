import { useContext } from "react";
import { DeliveryContext } from "../Context/DeliveryContext";
import { useParams } from "react-router-dom";
import DeliveryCard from "./DeliveryCard";

import { ProductContext } from "../Context/ProductContext";
import { Suspense, lazy } from "react";
import Dishes from "./Dishes";
const Delivery = () => {
  const { favorites, brands, isLoading } = useContext(DeliveryContext);
  const { dishId } = useParams();
  const { products, isLoadingProduct, producterror, searchfilters } =
    useContext(ProductContext);

  console.log("search filter", searchfilters, dishId);

  const getProductAfterFilters = (dishId) => {
    return products.length > 0
      ? products.filter(({ info: { cuisine } }) =>
          cuisine.find(({ name }) =>
            // name?.toLowerCase()?.includes(dishId?.toLowerCase())
            searchfilters[dishId].join(",").includes(name.toLowerCase())
          )
        )
      : [];
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log("Delivery");
  return (
    <>
      {!dishId &&
        (isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <DeliveryCard favorites={favorites} favoriteFood />
            <DeliveryCard favorites={brands} brands />
          </>
        ))}

      {dishId && (
        <Dishes
          dishId={dishId}
          products={getProductAfterFilters(dishId)}
          isLoadingProduct={isLoadingProduct}
        />
      )}
    </>
  );
};

export default Delivery;
