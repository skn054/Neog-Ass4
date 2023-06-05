import { createContext, useState, useEffect, useReducer } from "react";

export const ProductContext = createContext();

const reducerFun = (state, action) => {
  const { productsList, filtersFlag, uneditedProductsList } = state;
  switch (action.type) {
    case "RATING":
      console.log("executing rating");
      return {
        ...state,
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
        // filtersFlag: { ...filtersFlag, rating: true, relevance: false },
        filtersFlag: {
          ...filtersFlag,
          relevance: false,
          deliveryTime: false,
          rating: true,
          costHighToLow: false,
          costLowToHigh: false,
        },
        // uneditedProductsList: uneditedProductsList,
      };

    case "DELIVERY":
      return {
        ...state,
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
        // filtersFlag: { ...filtersFlag, relevance: false, deliveryTime: true },
        filtersFlag: {
          ...filtersFlag,
          relevance: false,
          deliveryTime: true,
          rating: false,
          costHighToLow: false,
          costLowToHigh: false,
        },
        // uneditedProductsList: uneditedProductsList,
      };
    case "COST_LOW_TO_HIGH":
      console.log("cost rating");
      return {
        ...state,
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
          deliveryTime: false,
          rating: false,
          costHighToLow: false,
          costLowToHigh: true,
        },
        // uneditedProductsList: uneditedProductsList,
      };
    case "COST_HIGH_TO_LOW":
      console.log("cost rating");
      return {
        ...state,
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
          deliveryTime: false,
          rating: false,
          costHighToLow: true,
          costLowToHigh: false,
        },
        // uneditedProductsList: uneditedProductsList,
      };
    case "CLEAR_ALL":
      return {
        ...state,
        productsList: uneditedProductsList,
        filtersFlag: {
          // ...filtersFlag,
          relevance: true,
          deliveryTime: false,
          rating: false,
          costHighToLow: false,
          costLowToHigh: false,
          searchText: "",
        },
        // uneditedProductsList: uneditedProductsList,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        productsList: action.payload,
        // filtersFlag: { ...filtersFlag },
        uneditedProductsList: action.payload,
      };

    case "SET_SEARCH_TEXT":
      // console.log(action.payload);
      return {
        ...state,
        // productsList: [...productsList],
        filtersFlag: { ...filtersFlag, searchText: action.payload },
        // uneditedProductsList: uneditedProductsList,
      };
    case "SET_SEARCH_FILTERS":
      console.log("payload", action.payload);
      return {
        ...state,
        categoriesFilter: action.payload,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        productsList: uneditedProductsList,
        filtersFlag: {
          relevance: true,
          deliveryTime: false,
          rating: false,
          costHighToLow: false,
          costLowToHigh: false,
          searchText: "",
        },
        categoriesFilter: {
          biryani: false,
          pizza: false,
          chicken: false,
          burger: false,
          shawarma: false,
          cakes: false,
          sandwitch: false,
          dosa: false,
          rolls: false,
          thali: false,
        },
      };
    default:
      return { ...state };
  }
};

export function ProductContextProvider({ children }) {
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  // const [products, setProducts] = useState([]);
  const [producterror, setProductError] = useState({});
  const [menus, setMenus] = useState([]);
  const [sectionInfo, setSectionInfo] = useState({});
  const [errorMenu, setErrorMenu] = useState({});
  const [isLoadingMenu, setIsLoadingMenu] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchfilters, setSearchFIlters] = useState({
    biryani: ["biryani", "mandi", "hyderabadi"],
    pizza: ["pizza , bakery, Italian, Pasta"],
    chicken: [
      "north indian",
      "bbq",
      "kebab",
      "chinese",
      "biryani",
      "fast food",
    ],
    burger: ["burger", "wraps"],
    cake: ["bakery"],
    dosa: ["south indian"],
    thali: ["south indian", "north indian"],
    sandwich: ["bakery"],
    rolls: ["rolls", "wraps"],
    shawarma: ["shawarma"],
  });

  const [categories, setCategories] = useState([
    "biryani",
    "pizza",
    "chicken",
    "burger",
    "shawarma",
    "cakes",
    "sandwitch",
    "dosa",
    "rolls",
    "thali",
  ]);

  const [state, dispatch] = useReducer(reducerFun, {
    productsList: [],
    filtersFlag: {
      relevance: true,
      deliveryTime: false,
      rating: false,
      costHighToLow: false,
      costLowToHigh: false,
      searchText: "",
    },
    categoriesFilter: {
      biryani: false,
      pizza: false,
      chicken: false,
      burger: false,
      shawarma: false,
      cakes: false,
      sandwitch: false,
      dosa: false,
      rolls: false,
      thali: false,
    },

    uneditedProductsList: [],
  });

  useEffect(() => {
    console.log("delivery useeffect");
    const getProducts = async () => {
      try {
        const res = await fetch("/api/products");

        if (res.status === 200) {
          const { products } = await res.json();
          // console.log(products);
          // setProducts(products);
          dispatch({ type: "SET_PRODUCTS", payload: products });
        } else {
          throw new Error({ status: 404, message: "Data not Found" });
        }
      } catch (error) {
        setProductError(error);
      } finally {
        setIsLoadingProduct(false);
      }
    };

    getProducts();
  }, []);

  const geProductWIthId = async (rId) => {
    const url = "/api/products/" + rId;
    setIsLoadingMenu(true);
    try {
      const response = await fetch(url);

      if (response?.status === 200) {
        const data = await response.json();
        const { product } = data;
        const {
          menuList: { menus },
          SECTION_BASIC_INFO,
        } = product;
        setMenus(menus);
        setSectionInfo(SECTION_BASIC_INFO);
      } else {
        throw new Error({ status: 404, message: "Data not Found" });
      }
    } catch (error) {
      setErrorMenu(error);
    } finally {
      setIsLoadingMenu(false);
    }
  };

  const anyFiterApplied = () => {
    return Object.values(state.categoriesFilter).find(
      (value) => value === true
    );
  };
  const getProductAfterFilters = (dishId) => {
    return state.productsList.length > 0
      ? state.productsList.filter(({ info: { cuisine } }) =>
          cuisine.find(({ name }) =>
            // name?.toLowerCase()?.includes(dishId?.toLowerCase())
            searchfilters[dishId].join(",").includes(name.toLowerCase())
          )
        )
      : [];
  };

  function getProductsAfterFIlter() {
    let result = [];
    Object.entries(state.categoriesFilter).forEach(([key, value]) => {
      if (value === true) {
        for (let product of getProductAfterFilters(key)) {
          if (!result.find((resProduct) => resProduct._id === product._id)) {
            result.push(product);
          }
          console.log(product);
        }
        // console.log(getProductAfterFilters(key));
        // result = [...result, ...getProductAfterFilters(key)];
      }
    });

    return result;
  }

  const finalProductList = anyFiterApplied(state.categoriesFilter)
    ? getProductsAfterFIlter()
    : state.productsList;

  console.log(finalProductList);
  // console.log(result)
  return (
    <ProductContext.Provider
      value={{
        // products: state.productsList,
        products: finalProductList,
        filtersFlag: state.filtersFlag,
        categoriesFilter: state.categoriesFilter,
        isLoadingProduct,
        producterror,
        searchfilters,
        menus,
        sectionInfo,
        isLoadingMenu,
        errorMenu,
        geProductWIthId,
        dispatch,
        setSearchText,
        categories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
