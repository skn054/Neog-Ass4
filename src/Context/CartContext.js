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
    case "UPDATE_QUANTITY_IN_CART":
      return { cart: action.payload };
    case "REMOVE_FROM_CART":
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
        console.log("cart", cart);
      } catch (error) {
        console.log(error);
        toast.error("Unable to display cart!");
        setIsErrorCart(true);
      } finally {
        setIsLoadingCart(false);
      }
    };
    token && getCartDetails();
  }, [token]);

  const addToCart = async (item, authToken) => {
    // console.log("item", item);
    try {
      const cartCall = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: authToken,
        },
        // body: JSON.stringify({ product: { _id: item?.id, ...item } }),
        body: JSON.stringify({ product: item }),
      });

      const { cart } = await cartCall.json();
      dispatch({ type: "ADD_TO_CART", payload: cart });
      toast.success("Added to cart successfully!");
      console.log(cart);
    } catch (error) {
      console.log(error);
      toast.error("Unable to add to cart!");
    }
  };

  const itemInCart = (item) => {
    console.log("item in cart");
    return cartArray?.cart?.find((product) => product.id === item.id);
  };

  const updateQuantityInCart = async (product, actionType) => {
    console.log("actionType", actionType);
    console.log("url", `/api/user/cart/${product.id}`);
    try {
      const cartCall = await fetch(`/api/user/cart/${product.id}`, {
        method: "POST",

        headers: {
          authorization: token,
        },
        body: JSON.stringify({ action: { type: actionType } }),
      });

      const { cart } = await cartCall.json();
      dispatch({ type: "UPDATE_QUANTITY_IN_CART", payload: cart });
      toast.success(
        `${
          actionType === "increment" ? "Increased" : "Decreased"
        } quantity in cart`
      );
      console.log("cart after update is", cart);
    } catch (error) {
      console.log(error);
      toast.error("Unable to add to cart!");
    }
  };

  const removeFromCart = async (product, checkoutPge) => {
    try {
      const response = await fetch(`/api/user/cart/${product?.id}`, {
        method: "DELETE",
        headers: { authorization: token },
      });
      const { cart } = await response.json();
      dispatch({ type: "REMOVE_FROM_CART", payload: cart });
      !checkoutPge && toast.success(`${product.name} Removed From Cart`);
    } catch (error) {
      console.log(error);
      toast.error("Unable to remove Item from cart");
    }
  };
  const totalPrice = cartArray?.cart?.reduce((price, item) => {
    return price + item?.price * item?.qty;
  }, 0);

  const emptyCart = () => {
    try {
      for (let i = 0; i < cartArray?.cart?.length; i++) {
        removeFromCart(cartArray?.cart[i], true);
      }
      toast.success("Emptied cart successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Unable to empty cart!");
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartArray,
        itemInCart,
        isLoadingCart,
        isErrorCart,
        totalPrice,
        updateQuantityInCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
