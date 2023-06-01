import {
  createContext,
  useReducer,
  useState,
  useEffect,
  useContext,
} from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cart: action.payload };
    case "DISPLAY_CART":
      return { cart: action.payload };
    default:
      return state;
  }
}
export function CartContextProvider({ children }) {
  const [cartArray, dispatch] = useReducer(cartReducer, { cart: [] });
  const [isLoadingCart, setIsLoadingCart] = useState(false);
  const [isErrorCart, setIsErrorCart] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getCartDetails = async () => {
      try {
        setIsLoadingCart(true);
        const cartCall = await fetch("/api/user/cart", {
          method: "GET",
          headers: {
            authorization: token,
          },
        });

        const { cart } = await cartCall.json();
        dispatch({ type: "DISPLAY_CART", payload: cart });
      } catch (error) {
        console.log(error);
        toast.error("Unable to display cart!");
        setIsErrorCart(true);
      } finally {
        setIsLoadingCart(false);
      }
    };
    getCartDetails();
  }, []);

  const addToCart = async (item, authToken) => {
    // console.log("item", item);
    try {
      const cartCall = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: authToken,
        },
        body: JSON.stringify({ product: item }),
      });

      const { cart } = await cartCall.json();
      dispatch({ type: "ADD_TO_CART", payload: cart });
      toast.success("Added to cart successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Unable to add to cart!");
    }
  };

  const itemInCart = (item) => {
    return cartArray?.cart?.find((product) => product.id === item.id);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, cartArray, itemInCart, isLoadingCart, isErrorCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
