export const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

export const CardCircularShimmer = () => {
  return (
    <div className="shimmer-circle">
      <div className="shimmer-circle-img stroke animate"></div>
    </div>
  );
};

export const SectionShimmer = () => {
  return (
    <div className="w-full max-w-full bg-transparent h-20 my-1 sticky">
      <section className="w-full max-w-max-c-h my-0 mx-auto relative">
        <section className="flex justify-start w-max items-center [&>*:nth-child(1)]:mr-4 [&>*:nth-child(2)]:mr-4 ">
          {Array(3)
            .fill("")
            .map((element, index) => {
              return (
                <div className="flex justify-center items-center flex-col shimmer-card">
                  <div className="flex items-center">
                    <div
                      className="flex items-center justify-center h-16 w-16 rounded-[50%]  m-4 "
                      //   style={{ background: isActive ? "#fceec0" : "gray" }}
                    >
                      <div className="overflow-hidden h-1/2 w-1/2">
                        <img className="h-full w-full shimmer-img stroke animate" />
                      </div>
                    </div>

                    <div className="font-medium text-xl shimmer-title stroke animate">
                      {/* {title} */}
                    </div>
                  </div>
                  {/* {isActive && <hr className="bg-[#ff7e8b] h-[0.2rem] w-full"></hr>} */}
                </div>
              );
            })}
        </section>
      </section>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary stroke-color animate">
        <img className="shimmer-img stroke animate" />
        <div className="restaurant-summary-details">
          <h2 className="shimmer-w40  stroke animate"></h2>
          <p className="shimmer-w20 stroke animate"></p>
          <div className="shimmer-w60  stroke animate"></div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap ">
            <h3 className="shimmer-w40 stroke animate"></h3>
            <p className="shimmer-w20 stroke animate"></p>
          </div>
          <div className="menu-items-list">
            {Array(4)
              .fill("")
              .map((element, index) => (
                <div className="shimmer-menu-card" key={index}>
                  <div className="shimmer-item-details">
                    <h3 className="shimmer-w40  stroke animate"></h3>
                    <p className="shimmer-w20  stroke animate"> </p>
                    <p className="shimmer-w60  stroke animate"></p>
                  </div>
                  <div className="shimmer-img-wrapper">
                    <img className="shimmer-img stroke animate" />
                    <div className="shimmer-btn stroke animate"> </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {/* create a new Array instance using Array() constructor and map through every element of array */}
      {Array(4)
        .fill("")
        .map((element, index) => {
          return <CardShimmer key={index} />;
        })}
    </div>
  );
};

export const CardCircleShimmer = () => {
  return (
    <div className="shimmer-container">
      {/* create a new Array instance using Array() constructor and map through every element of array */}
      {Array(4)
        .fill("")
        .map((element, index) => {
          return <CardCircularShimmer key={index} />;
        })}
    </div>
  );
};
// export default Shimmer;

export default SectionShimmer;
