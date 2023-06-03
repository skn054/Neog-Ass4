import { createContext, useReducer, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { toast } from "react-hot-toast";

export const WishListContext = createContext();

export function WishListReducer(state, action) {
  switch (action.type) {
    case "DISPLAY_WISHLIST":
      return { wishList: action.payload };
    case "ADD_TO_WISHLIST":
      return { wishList: action.payload };
    case "DELETE_FROM_WISHLIST":
      return { wishList: action.payload };
    default:
      return { state };
  }
}

export function WishListContextProvider({ children }) {
  const [wishListState, dispatch] = useReducer(WishListReducer, {
    wishList: [],
  });
  const [isLoadingWishList, setIsLoadingWishList] = useState(false);
  const [isErrorWishList, setIsErrorWishList] = useState(false);

  const { token } = useContext(AuthContext);

  //   useEffect(() => {
  const getWishListDetails = async () => {
    try {
      setIsLoadingWishList(true);
      const response = await fetch("/api/user/wishlist", {
        method: "GET",
        headers: {
          authorization: token,
        },
      });

      const { wishlist } = await response.json();
      dispatch({ type: "DISPLAY_WISHLIST", payload: wishlist });
      console.log("wishlist", wishlist);
    } catch (error) {
      console.log(error);
      toast.error("Unable to display wishlist!");
      setIsErrorWishList(error);
    } finally {
      setIsLoadingWishList(false);
    }
  };

  //   }, [token]);

  const addItemToWIshList = async (product) => {
    try {
      setIsLoadingWishList(true);
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ product: product }),
      });
      const { wishlist } = await response.json();
      console.log("wishList", wishlist);
      dispatch({ type: "ADD_TO_WISHLIST", payload: wishlist });
      toast.success("addedd item to WishList");
    } catch (error) {
      toast.error("Unable to add Item to WishList");
    } finally {
      setIsLoadingWishList(false);
    }
  };
  const ItemInWishList = (product) => {
    return wishListState?.wishList?.find((item) => item._id === product._id);
  };

  const deleteFromWishList = async (product) => {
    console.log("product before delete", product);
    const id = product._id.toString();

    console.log(typeof id);
    try {
      setIsLoadingWishList(true);
      const response = await fetch(`/api/user/wishlist/${id}`, {
        method: "DELETE",
        headers: { authorization: token },
      });
      // console.log(response);
      const { wishlist } = await response.json();
      console.log("after deletion", wishlist);
      dispatch({ type: "DELETE_FROM_WISHLIST", payload: wishlist });
      toast.success("deleted item to WishList");
    } catch (error) {
      toast.error("Unable to delete Item to WishList");
    } finally {
      setIsLoadingWishList(false);
    }
  };
  return (
    <WishListContext.Provider
      value={{
        wishListState,
        isLoadingWishList,
        isErrorWishList,
        getWishListDetails,
        ItemInWishList,
        addItemToWIshList,
        deleteFromWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}
