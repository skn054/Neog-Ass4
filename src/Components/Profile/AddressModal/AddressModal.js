import { useContext, useEffect, useState } from "react";
import { AddressContext } from "../../../Context/AddressContext";
import "./AddressModal.css";
import { useFormik } from "formik";
import * as Yup from "yup";

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

export const AddressModal = () => {
  const {
    addressDispatch,
    addressState: { initialValues, address },
    fakeAddress,
  } = useContext(AddressContext);

  // const [fakeValues, setFakeValues] = useState(false);

  console.log("initial values", initialValues);
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    // initialValues: {
    //   name: "",
    //   city: "",
    //   state: "",
    //   pincode: "",
    //   mobile: "",
    // },
    // enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: SignupSchema,
    onSubmit: (valu̥es) => {
      console.log("values", values);
      const isAddressPresent = address.find((add) => add._id === values._id);
      if (isAddressPresent) {
        addressDispatch({ type: "EDIT_ADDRESS_ARRAY", payload: values });
        addressDispatch({
          type: "EDIT_ADDRESS",
          payload: {
            _id: "",
            name: "",
            city: "",
            state: "",
            pincode: "",
            mobile: "",
          },
        });
      } else {
        addressDispatch({
          type: "ADD_TO_ADDRESS",
          // payload: fakeValues ? fakeAddress : values,
          payload: values,
        });
      }

      addressDispatch({ type: "SHOW_MODAL", payload: false });
      console.log(
        "🚀 ~ file: AddressModal.js:29 ~ AddressModal ~ valu̥es:",
        valu̥es
      );
    },
  });

  const handleInput = (e) => {
    // addressDispatch({
    //   type: SET_ADDRESS_DETAILS,
    //   payload: { name: e.target.name, value: e.target.value },
    // });
  };

  //   const handleAddressSubmit = (e) => {
  //     e.preventDefault();
  //     const isAddressPresent = address?.find(
  //       (singleAdd) => singleAdd._id === addressFormData._id
  //     );
  //     if (isAddressPresent) {
  //       editAddress(isAddressPresent._id, addressFormData);
  //     } else {
  //       addToAddress({ ...addressFormData, _id: uuid() });
  //     }
  //     addressDispatch({ type: SET_SHOW_ADDRESS_MODAL, payload: false });
  //   };

  useEffect(() => {
    return function () {
      console.log("modal component removed");
    };
  });

  return (
    <div className="addressModal">
      <h2>Add New Address</h2>
      <form onSubmit={handleSubmit}>
        <label>
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
        </label>
        <div>
          <button type="submit">
            <p>Add</p>
          </button>
          <button
            onClick={() => {
              addressDispatch({ type: "SHOW_MODAL", payload: false });
              addressDispatch({
                type: "EDIT_ADDRESS",
                payload: {
                  _id: "",
                  name: "",
                  city: "",
                  state: "",
                  pincode: "",
                  mobile: "",
                },
              });
            }}
          >
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
