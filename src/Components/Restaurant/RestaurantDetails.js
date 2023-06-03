import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import RestaurantHeader from "./RestaurantHeader";
import ItemList from "./RestaurantItem/ItemList";
import { useParams } from "react-router";

const RestaurantDetails = () => {
  // const [error, setError] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // const [menus, setMenus] = useState([]);
  // const [sectionInfo, setSectionInfo] = useState({});

  const { rId } = useParams();
  const { menus, sectionInfo, isLoadingMenu, errorMenu, geProductWIthId } =
    useContext(ProductContext);

  // console.log(sectionInfo);
  useEffect(() => {
    geProductWIthId(rId);
  }, [rId]);

  // if (isLoadingMenu) {
  //   return <h1>Loading...</h1>;
  // }
  // if (errorMenu.status) {
  //   return (
  //     <>
  //       <p>
  //         Error Status : {errorMenu.status} Message : {errorMenu.message}
  //       </p>
  //     </>
  //   );
  // }
  return (
    <div className="w-full max-w-full bg-transparent my-5">
      <section className="w-full max-w-max-c-h my-0 mx-auto relative">
        {isLoadingMenu ? (
          <h1>Loading...</h1>
        ) : errorMenu.status ? (
          <>
            <p>
              Error Status : {errorMenu.status} Message : {errorMenu.message}
            </p>
          </>
        ) : (
          <>
            <RestaurantHeader SECTION_BASIC_INFO={sectionInfo} />
            <ItemList menus={menus} rName={sectionInfo.name} />
          </>
        )}
      </section>
    </div>
  );
};

export default RestaurantDetails;
