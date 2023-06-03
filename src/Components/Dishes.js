import { useReducer, useContext } from "react";
import RestaurantCard from "./Restaurant/RestaurantCard";
import Restaurant from "./Restaurant/Restaurant";
import { SearchContext } from "../Context/SearchContext";
import { ProductContext } from "../Context/ProductContext";

const reducerFun = (state, action) => {
  const { productsList, filtersFlag, uneditedProductsList } = state;
  switch (action.type) {
    case "RATING":
      console.log("executing rating");
      return {
        productsList: [...productsList].sort((product1, product2) => {
          const {
            info: {
              rating: { rating_text: rating1 },
            },
          } = product1;

          const {
            info: {
              rating: { rating_text: rating2 },
            },
          } = product2;

          return Number(rating2) - Number(rating1);
        }),
        filtersFlag: { ...filtersFlag, rating: true, relevance: false },
        uneditedProductsList: uneditedProductsList,
      };

    case "DELIVERY":
      return {
        productsList: [...productsList].sort((product1, product2) => {
          const {
            order: { deliveryTime: delivery1 },
          } = product1;

          const {
            order: { deliveryTime: delivery2 },
          } = product2;
          return (
            Number(delivery1.split("")[0]) - Number(delivery2.split("")[0])
          );
        }),
        filtersFlag: { ...filtersFlag, relevance: false, deliveryTime: true },
        uneditedProductsList: uneditedProductsList,
      };
    case "COST_LOW_TO_HIGH":
      console.log("cost rating");
      return {
        productsList: [...productsList].sort((product1, product2) => {
          const {
            info: {
              cft: { text: cost1 },
            },
          } = product1;

          const {
            info: {
              cft: { text: cost2 },
            },
          } = product2;

          return (
            Number(
              cost1.substring(1, cost1.indexOf(" ")).replace(/[,]+/g, "")
            ) -
            Number(cost2.substring(1, cost2.indexOf(" ")).replace(/[,]+/g, ""))
          );
        }),
        filtersFlag: {
          ...filtersFlag,
          relevance: false,
          costHighToLow: false,
          costLowToHigh: true,
        },
        uneditedProductsList: uneditedProductsList,
      };
    case "COST_HIGH_TO_LOW":
      console.log("cost rating");
      return {
        productsList: [...productsList].sort((product1, product2) => {
          const {
            info: {
              cft: { text: cost1 },
            },
          } = product1;

          const {
            info: {
              cft: { text: cost2 },
            },
          } = product2;

          return (
            Number(
              cost2.substring(1, cost2.indexOf(" ")).replace(/[,]+/g, "")
            ) -
            Number(cost1.substring(1, cost1.indexOf(" ")).replace(/[,]+/g, ""))
          );
        }),
        filtersFlag: {
          ...filtersFlag,
          relevance: false,
          costHighToLow: true,
          costLowToHigh: false,
        },
        uneditedProductsList: uneditedProductsList,
      };
    case "CLEAR_ALL":
      return {
        productsList: uneditedProductsList,
        filtersFlag: {
          relevance: true,
          deliveryTime: false,
          rating: false,
          costHighToLow: false,
          costLowToHigh: false,
        },
        uneditedProductsList: uneditedProductsList,
      };
    case "FILTERED_PRODUCT":
      return {
        productsList: action.payload,
        filtersFlag: { ...filtersFlag },
        uneditedProductsList: uneditedProductsList,
      };
    default:
      return { ...state };
  }
};
const Dishes = ({ dishId, products, isLoadingProduct }) => {
  console.log("products are", products);
  // const [state, dispatch] = useReducer(reducerFun, {
  //   productsList: products,
  //   filtersFlag: {
  //     relevance: true,
  //     deliveryTime: false,
  //     rating: false,
  //     costHighToLow: false,
  //     costLowToHigh: false,
  //   },
  //   uneditedProductsList: products,
  // });
  // const { searchText } = useContext(SearchContext);
  const { dispatch, filtersFlag } = useContext(ProductContext);

  // const { productsList, filtersFlag } = state;
  const {
    relevance,
    deliveryTime,
    rating,
    costHighToLow,
    costLowToHigh,
    searchText,
  } = filtersFlag;

  if (searchText.length > 0) {
    products = products.filter(({ info: { cuisine } }) =>
      cuisine.find(({ name }) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }
  if (isLoadingProduct) {
    return <h1>Loading...</h1>;
  }

  console.log("product list is", products);
  return (
    <>
      <div className="mt-10 py-8 bg-[#F8F8F8]">
        <div className="max-w-max-c-h my-0 mx-auto max-h-[initial] relative">
          <div className="h-16">
            <div className="h-full">
              <div className="flex items-center justify-between  max-w-max-c-h my-0 mx-auto">
                <div className="text-2xl font-normal">
                  {products?.length} restaurants
                </div>
                <div className="flex items-center gap-4 text-[#686b78]">
                  <div className="cursor-pointer ">
                    Relevance
                    {relevance && (
                      <hr className="bg-[#686b78] h-[0.1rem] w-full"></hr>
                    )}
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => dispatch({ type: "DELIVERY" })}
                  >
                    Delivery Time
                    {deliveryTime && (
                      <hr className="bg-[#686b78] h-[0.1rem] w-full"></hr>
                    )}
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => dispatch({ type: "RATING" })}
                  >
                    Rating
                    {rating && (
                      <hr className="bg-[#686b78] h-[0.1rem] w-full"></hr>
                    )}
                  </div>
                  <div
                    className="cursor-pointer "
                    onClick={() => dispatch({ type: "COST_LOW_TO_HIGH" })}
                  >
                    Cost: Low To High
                    {costLowToHigh && (
                      <hr className="bg-[#686b78] h-[0.1rem] w-full"></hr>
                    )}
                  </div>
                  <div
                    className="cursor-pointer "
                    onClick={() => dispatch({ type: "COST_HIGH_TO_LOW" })}
                  >
                    Cost: High To Low
                    {costHighToLow && (
                      <hr className="bg-[#686b78] h-[0.1rem] w-full"></hr>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="h-full">
              <div className="max-w-max-c-h my-0 mx-auto flex justify-end">
                <div
                  className="text-[#686b78] cursor-pointer hover:underline"
                  onClick={() => dispatch({ type: "CLEAR_ALL" })}
                >
                  Clear All
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-[#1C1C1C] text-2xl font-medium mb-8 text-start ">
            {dishId?.charAt(0)?.toUpperCase() + dishId?.slice(1)}
          </h3>
          <section className="w-full relative">
            <section>
              <section className="flex relative flex-wrap gap-5">
                {/* {productsList.map((item) => { */}
                {products.map((item) => {
                  return (
                    <RestaurantCard key={item._id} id={item._id}>
                      <Restaurant
                        key={item._id}
                        {...item}
                        item={item}
                        id={item._id}
                      />
                    </RestaurantCard>
                  );
                })}
              </section>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dishes;
