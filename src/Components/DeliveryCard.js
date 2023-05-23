import { NavLink } from "react-router-dom";
const DeliveryCard = ({ favorites, brands, favoriteFood }) => {
  return (
    <div className="mt-10 py-8 bg-[#F8F8F8]">
      <div className="max-w-max-c-h my-0 mx-auto max-h-[initial] relative">
        <h3 className="text-[#1C1C1C] text-3xl font-normal mb-8 text-start ">
          {favorites?.title}
        </h3>
        <section className="w-full relative">
          <section>
            <section className="flex relative flex-wrap gap-5">
              {/**below section needs to be repeated */}
              {favorites?.items?.map((item) => {
                const {
                  name,
                  actionInfo: { clickUrl },
                  entity_id,
                  res_id,
                } = item;
                const img_url = brands
                  ? item?.image?.url
                  : item?.image?.imageUrl;
                return (
                  <section
                    className="w-40 mr-9"
                    key={brands ? res_id : entity_id}
                  >
                    <div className="w-36 flex justify-center items-center flex-col">
                      <div className="cursor-pointer flex justify-center items-center rounder-[50%] h-16 w-16 ">
                        <div className="h-full w-full rounded-[50%] overflow-hidden">
                          <img src={img_url} className="w-full h-full" />
                        </div>
                      </div>
                      {favoriteFood && (
                        <NavLink to={`${name?.toLowerCase()}`}>
                          <p className="text-xl font-[400] text-center text-black mt-2">
                            {name}
                          </p>
                        </NavLink>
                      )}
                      {brands && (
                        <NavLink>
                          <p className="text-xl font-[400] text-center text-black mt-2">
                            {name}
                          </p>
                        </NavLink>
                      )}
                    </div>
                  </section>
                );
              })}
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default DeliveryCard;
