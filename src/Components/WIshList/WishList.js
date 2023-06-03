import { useContext } from "react";
import { WishListContext } from "../../Context/WishListContext";
import RestaurantCard from "../Restaurant/RestaurantCard";
import Restaurant from "../Restaurant/Restaurant";
import { NavLink } from "react-router-dom";
const WishList = () => {
  const {
    wishListState: { wishList },
    isLoadingWishList,
    isErrorWishList,
    ItemInWishList,
  } = useContext(WishListContext);

  return (
    <section className="w-full relative">
      <section>
        <section className="flex relative flex-wrap gap-5">
          {isLoadingWishList ? (
            <h1>Loading....</h1>
          ) : isErrorWishList ? (
            <h1>Error</h1>
          ) : wishList.length === 0 ? (
            <div>
              <h2>Oops! Your WishList is empty! </h2>
              <NavLink to="/delivery">
                <button>Start shopping!</button>
              </NavLink>
            </div>
          ) : (
            wishList.map((item) => {
              return (
                <RestaurantCard key={item._id} id={item._id}>
                  <Restaurant
                    key={item._id}
                    {...item}
                    wishList
                    id={item._id}
                    item={item}
                  />
                </RestaurantCard>
              );
            })
          )}
        </section>
      </section>
    </section>
  );
};

export default WishList;
