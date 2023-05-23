import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();
export function ProductContextProvider({ children }) {
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  const [products, setProducts] = useState([]);
  const [producterror, setProductError] = useState({});
  const [searchfilters, setSearchFIlters] = useState({
    biryani: [
      "biryani",
      "mandi",
      "hyderabadi",
    ],
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
    sandwich :["bakery"],
    rolls : ["rolls","wraps"],
    shawarma : ["shawarma"]
  });
  useEffect(() => {
    console.log("delivery useeffect");
    const getProducts = async () => {
      try {
        const res = await fetch("/api/products");

        if (res.status === 200) {
          const { products } = await res.json();
          console.log(products);
          setProducts(products);
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
  return (
    <ProductContext.Provider
      value={{ products, isLoadingProduct, producterror, searchfilters }}
    >
      {children}
    </ProductContext.Provider>
  );
}
