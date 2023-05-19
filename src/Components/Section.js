import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DeliveryContext } from "../Context/DeliveryContext";

const Section = () => {
  const { sectionSearchTabs, isLoading, error } = useContext(DeliveryContext);
  let result;
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (error?.status) {
    return (
      <h1>
        <p>
          Status: {error.status} Message: {error.message}
        </p>
      </h1>
    );
  } else {
    result = sectionSearchTabs.map((item) => {
      const { key, image, title } = item;
      return (
        <NavLink to={`/${key}`} key={key}>
          {({ isActive }) => (
            <div className="flex justify-center items-center flex-col ">
              <div className="flex items-center">
                <div
                  className="flex items-center justify-center h-16 w-16 rounded-[50%]  m-4"
                  style={{ background: isActive ? "#fceec0" : "gray" }}
                >
                  <div className="overflow-hidden h-1/2 w-1/2">
                    <img src={image} className="h-full w-full" />
                  </div>
                </div>

                <div
                  className="font-medium text-xl"
                  style={{
                    color: isActive ? "rgb(239, 79, 95)" : "rgb(105, 105, 105)",
                  }}
                >
                  {title}
                </div>
              </div>
              {isActive && <hr className="bg-[#ff7e8b] h-[0.2rem] w-full"></hr>}
            </div>
          )}
        </NavLink>
      );
    });
  }
  return (
    <div className="w-full max-w-full bg-transparent h-20 my-1 sticky">
      <section className="w-full max-w-max-c-h my-0 mx-auto relative">
        <section className="flex justify-start w-max items-center [&>*:nth-child(1)]:mr-4 [&>*:nth-child(2)]:mr-4 ">
          {result}
        </section>
      </section>
    </div>
  );
};

export default Section;
