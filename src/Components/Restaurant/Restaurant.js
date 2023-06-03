import React, { useContext, useState } from "react";
// import { RESTAURANT_IMAGE_URL } from "./config";
import { NavLink, useNavigate, useLocation, Navigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AuthContext } from "../../Context/AuthContext";
import { WishListContext } from "../../Context/WishListContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toast } from "react-hot-toast";

export default function Restaurant({
  info,
  order,
  distance,
  isPromoted,
  promotedText,
  checkBulkOffers,
  bottomContainers,
  item,
  id,
  wishList,
}) {
  const { name, image, rating, cft, locality, cuisine } = info;
  const { rating_text, rating_color, votes } = rating;
  const { deliveryTime } = order;
  const cuisines = cuisine.map(({ name }) => name);
  const { addItemToWIshList, ItemInWishList, deleteFromWishList } =
    useContext(WishListContext);
  const navigate = useNavigate();
  const location = useLocation();
  const wishListBtnHandler = (e, item) => {
    console.log("wishItem", item);
    if (token) {
      ItemInWishList(item) ? deleteFromWishList(item) : addItemToWIshList(item);
    } else {
      navigate("/login");
      // <Navigate to="/login" state={{ from: location }} />;
      toast.error("Login to add items to Wishlist");
    }
  };
  const { token } = useContext(AuthContext);
  return (
    <div className="w-64 flex flex-col ">
      <div className="flex h-40 w-64">
        <div className="h-full w-full overflow-hidden relative">
          <img
            alt="restaurantimage"
            src={image?.url}
            className="h-full w-full"
          ></img>

          <div
            className="absolute top-0 right-0 text-white"
            onClick={(e) => wishListBtnHandler(e, item)}
          >
            {token ? (
              ItemInWishList(item) ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )
            ) : (
              <FavoriteBorderIcon />
            )}
            {/* <FavoriteBorderIcon /> */}
          </div>
        </div>
      </div>

      <NavLink to={"/restaurant/" + id}>
        <div className="mt-4 text-xl font-normal">
          <div className="text-start">{name}</div>
          <div className="text-[ #686b78] text-xs mt-1 text-start">
            {cuisines.join(", ")}
          </div>
        </div>

        <div className="flex justify-between text-xs text-[#535665] mt-2">
          <div className="flex">
            <span></span>
            <span
              className="text-[#fff] px-1 py-0"
              style={
                Number(rating_text) >= 4
                  ? { backgroundColor: "#48c479" }
                  : { backgroundColor: "#db7c38" }
              }
            >
              {rating_text}
            </span>
          </div>
          <div>•</div>
          <div>{distance}</div>
          <div>•</div>
          <div>{deliveryTime}</div>
          <div>•</div>
          <div>{cft?.text}</div>
        </div>
        <div>
          <span>
            {checkBulkOffers?.length > 0 ? checkBulkOffers[0].text : ""}
          </span>
        </div>
      </NavLink>
    </div>
  );
}
