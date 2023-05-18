import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dishes = () => {
  const { dishId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});
  console.log("dishes main");

  useEffect(() => {
    console.log("Dishes");
    const getProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (res.status === 200) {
          const data = await res.json();
          console.log(data);
        } else {
          throw new Error({ status: 404, message: "Data not Found" });
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);
  return <></>;
};

export default Dishes;
