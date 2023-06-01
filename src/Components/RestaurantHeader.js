const RestaurantHeader = ({ SECTION_BASIC_INFO }) => {
  const {
    res_thumb,
    name,
    cuisine_string,
    rating_new: { ratings },
    res_status_text,
    timing: { timing_desc },
    address,
  } = SECTION_BASIC_INFO;

  const { DINING, DELIVERY } = ratings;
  return (
    <>
      <div className="nav-image">
        <img alt="mealsimage" src={res_thumb}></img>
      </div>
      <div className="flex flex-col gap-4 items-start">
        <div className="flex justify-between items-center gap-4 w-full">
          <div>
            <h1 className="font-medium text-5xl text-black">{name}</h1>
          </div>

          <div className="flex gap-3">
            <div className="flex  items-center gap-4">
              <div className="flex items-center justify-center bg-[#24963F] text-white h-8 rounded-xl p-3 text-xs gap-2">
                <div>{DELIVERY?.rating}</div>
                <div>
                  <span style={{ color: "#24963F", background: "white" }}>
                    &#9733;
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <div>{DELIVERY?.reviewCount}</div>
                <div>{DELIVERY?.sideSubTitle}</div>
              </div>
            </div>
            <div className="flex  items-center gap-4">
              <div className="flex items-center justify-center bg-[#24963F] text-white h-8 rounded-xl p-3 text-xs gap-2">
                <div>{DINING?.rating}</div>
                <div>
                  <span style={{ color: "#24963F", background: "white" }}>
                    &#9733;
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <div>{DINING?.reviewCount}</div>
                <div>{DINING?.sideSubTitle}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-xl text-[#828282]">{cuisine_string}</h5>
          <h5 className="text-[#9C9C9C] text-[1rem] text-start mt-2">
            {address}
          </h5>
          <div className="flex gap-3 mt-2 text-[#9C9C9C]">
            <h5 className="text-[#F4A266]">{res_status_text}</h5>
            <h5>{timing_desc}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantHeader;
