import { createContext, useEffect, useState } from "react";

export const DeliveryContext = createContext();

export function DeliveryContextProvider({ children }) {
  const [sectionSearchTabs, setSectionSearchTabs] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [brands, setBrands] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const url =
    // "https://www.zomato.com/webroutes/getPage?page_url=/hyderabad/secunderabad-restaurants?place_name=Secunderabad";
    const url = "/api/categories";
    const getHomePageDetails = async () => {
      try {
        const response = await fetch(url);

        if (response?.status === 200) {
          const data = await response.json();
          const { categories } = data;
          const {
            page_data: { SECTION_SEARCH_TABS, SECTION_SEARCH_RESULT },
          } = categories[0];
          setSectionSearchTabs(SECTION_SEARCH_TABS);
          setFavorites(SECTION_SEARCH_RESULT[0]);
          setBrands(SECTION_SEARCH_RESULT[1]);
        } else {
          throw new Error({ status: 404, message: "Data not Found" });
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getHomePageDetails();
  }, []);
  return (
    <DeliveryContext.Provider
      value={{ isLoading, error, sectionSearchTabs, favorites, brands }}
    >
      {children}
    </DeliveryContext.Provider>
  );
}
