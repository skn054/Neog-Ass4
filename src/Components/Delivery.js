import { useContext, useEffect } from "react";
import { DeliveryContext } from "../Context/DeliveryContext";
import { useParams } from "react-router-dom";
import DeliveryCard from "./DeliveryCard";

import { ProductContext } from "../Context/ProductContext";
import Dishes from "./Dishes";
import { Shimmer } from "./Shimmer";
const Delivery = () => {
  const { favorites, brands, isLoading } = useContext(DeliveryContext);
  const { dishId } = useParams();
  const { products, isLoadingProduct, searchfilters, dispatch } =
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
    return <Shimmer />;
  }

  console.log("Delivery");
  return (
    <>
      {!dishId &&
        (isLoading ? (
          <Shimmer />
        ) : (
          <>
            <DeliveryCard favorites={favorites} favoriteFood />
            <DeliveryCard favorites={brands} brands />
          </>
        ))}

      {dishId && (
        <Dishes
          dishId={dishId}
          // products={getProductAfterFilters(dishId)}
          products={products}
          isLoadingProduct={isLoadingProduct}
        />
      )}
    </>
  );
};

export default Delivery;
