import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import RestaurantHeader from "./RestaurantHeader";
import ItemList from "./ItemList";

const RestaurantDetails = () => {
  const { products } = useContext(ProductContext);
  const {
    menuList: { menus },
    SECTION_BASIC_INFO,
  } = products[0];
  console.log("restaurant header", products);
  return (
    <div className="w-full max-w-full bg-transparent h-[30rem] my-5 sticky">
      <section className="w-full  my-0 mx-auto relative">
        <RestaurantHeader mealsImage={SECTION_BASIC_INFO?.res_thumb} />
        <ItemList menus={menus} />
      </section>
    </div>
  );
};

export default RestaurantDetails;
