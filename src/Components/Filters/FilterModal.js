import { useContext, useEffect, useState } from "react";
import "./FilterModal.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../../Context/ProductContext";
import { AddressContext } from "../../Context/AddressContext";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter Name"),
  city: Yup.string().required("Please enter City"),
  state: Yup.string().required("please enter State"),
  pincode: Yup.string().min(5).required("Please enter your Pincode"),
  mobile: Yup.string()
    .min(10, "Too Short")
    .required("Please enter your mobile"),
});

export const FilterModal = ({ setShowFilters }) => {
  const {
    addressDispatch,
    addressState: { initialValues, address },
    fakeAddress,
  } = useContext(AddressContext);

  const { categories, categoriesFilter, dispatch } = useContext(ProductContext);

  // const [fakeValues, setFakeValues] = useState(false);

  //   console.log("initial values", initialValues);
  console.log(categoriesFilter);
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    // initialValues: {
    //   name: "",
    //   city: "",
    //   state: "",
    //   pincode: "",
    //   mobile: "",
    // },
    // enableReinitialize: true,
    initialValues: categoriesFilter,
    // validationSchema: SignupSchema,
    onSubmit: (valu̥es) => {
      console.log("🚀 ~ file: FilterModal.js:48 ~ FilterModal ~ ̥:", values);
      dispatch({ type: "SET_SEARCH_FILTERS", payload: values });
      setShowFilters(false);
    },
  });

  console.log("filter values", values);

  return (
    <div className="addressModal">
      <h2>Categories</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-1 overflow-y-scroll items-center justify-center ">
          {categories.map((category) => {
            return (
              <label>
                <div className="flex items-center justify-center">
                  <div className="flex-1">
                    <input
                      type="checkbox"
                      name={category}
                      id={category}
                      className="input"
                      checked={values[category]}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex-1">
                    {category?.charAt(0)?.toUpperCase() + category?.slice(1)}
                  </div>
                </div>
              </label>
            );
          })}
        </div>

        {/* <label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            // value={values.name}
            value={values.name}
            className="input"
            onChange={handleChange}
          />
          {errors.name && touched.name ? (
            <p className="text-red-600">{errors.name}</p>
          ) : null}
        </label>

        <label>
          <input
            type="text"
            placeholder="City"
            name="city"
            id="city"
            className="input"
            onChange={handleChange}
            value={values.city}
          />
          {errors.city && touched.city ? (
            <p className="text-red-600">{errors.city}</p>
          ) : null}
        </label>
        <label>
          <input
            type="text"
            placeholder="State"
            name="state"
            id="state"
            className="input"
            onChange={handleChange}
            value={values.state}
          />
          {errors.state && touched.state ? (
            <p className="text-red-600">{errors.state}</p>
          ) : null}
        </label>
        <label>
          <input
            type="number"
            placeholder="Pincode"
            name="pincode"
            id="pincode"
            value={values.pincode}
            className="input"
            onChange={handleChange}
          />
          {errors.pincode && touched.pincode ? (
            <p className="text-red-600">{errors.pincode}</p>
          ) : null}
        </label>
        <label>
          <input
            type="number"
            placeholder="Phone No."
            name="mobile"
            id="mobile"
            value={values.mobile}
            className="input"
            onChange={handleChange}
          />
          {errors.mobile && touched.mobile ? (
            <p className="text-red-600">{errors.mobile}</p>
          ) : null}
        </label> */}
        <div>
          <button type="submit">
            <p>Apply Filters</p>
          </button>
          <button onClick={() => setShowFilters(false)}>
            <p>Cancel</p>
          </button>
        </div>
        {/* <button
          onClick={() =>
            addressDispatch({ type: "SET_FAKE_ADDRESS", payload: fakeAddress })
          }
        >
          <p>Fill with Dummy Values</p>
        </button> */}
      </form>
    </div>
  );
};
