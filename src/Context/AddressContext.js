import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

export const AddressContext = createContext();

function addressReducer(state, action) {
  const { address, showModal } = state;
  switch (action.type) {
    case "ADD_TO_ADDRESS":
      return {
        ...state,
        address: [...address, { _id: uuid(), ...action.payload }],
      };
    case "EDIT_ADDRESS_ARRAY":
      return {
        ...state,
        address: address.map((addressItem) =>
          addressItem._id === action.payload._id ? action.payload : addressItem
        ),
      };
    case "DELETE_ADDRESS":
      return {
        ...state,
        address: address.filter(
          (addressItem) => addressItem._id != action.payload.id
        ),
      };
    case "EDIT_ADDRESS":
      console.log("edit address", action.payload);
      return {
        ...state,
        initialValues: action.payload,
      };

    case "SET_FAKE_ADDRESS":
      return {
        ...state,
        initialValues: action.payload,
      };
    case "SELECT_ADDRESS_CHECKOUT":
      return {
        ...state,
        selectedAddressId: action.payload,
      };
    case "SHOW_MODAL":
      return { ...state, showModal: action.payload };
    default:
      return { ...state };
  }
}
export function AddressContextProvider({ children }) {
  const address = [
    {
      _id: uuid(),
      name: "Sai Kiran",
      state: "Telangana",
      city: "Hyderabad",
      pincode: "500010",
      mobile: "12345678",
    },
    {
      _id: uuid(),
      name: "Kiran",
      state: "Telangana",
      city: "Secunderabad",
      pincode: "500010",
      mobile: "12345678",
    },
  ];

  const [addressState, addressDispatch] = useReducer(addressReducer, {
    address: address,
    showModal: false,
    initialValues: {
      _id: "",
      name: "",
      city: "",
      state: "",
      pincode: "",
      mobile: "",
    },
    selectedAddressId: null,
  });

  const fakeAddress = {
    _id: uuid(),
    name: "Dhoni",
    state: "Jharkhand",
    city: "Ranchi",
    pincode: "501210",
    mobile: "12345670",
  };
  return (
    <AddressContext.Provider
      value={{ fakeAddress, addressState, addressDispatch }}
    >
      {children}
    </AddressContext.Provider>
  );
}
