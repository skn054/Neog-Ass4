import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import RestaurantHeader from "./RestaurantHeader";
import ItemList from "./ItemList";
import { useParams } from "react-router";

const RestaurantDetails = () => {
 
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [menus, setMenus] = useState([]);
  const [sectionInfo, setSectionInfo] = useState({});
 

  const { rId } = useParams();

  useEffect(() => {
    const url = "/api/products/" + rId;
    const getProductDetails = async () => {
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
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProductDetails();
  }, [rId]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error.status) {
    return (
      <>
        <p>
          Error Status : {error.status} Message : {error.message}
        </p>
      </>
    );
  }
  return (
    <div className="w-full max-w-full bg-transparent my-5">
      <section className="w-full max-w-max-c-h my-0 mx-auto relative">
        <RestaurantHeader SECTION_BASIC_INFO={sectionInfo} />
        <ItemList menus={menus} />
      </section>
    </div>
  );
};

export default RestaurantDetails;
