import { AddressContext } from "../../../Context/AddressContext";
import { useContext } from "react";
import "./ProfileAddress.css";
import { AddressModal } from "../AddressModal/AddressModal";

const ProfileAddress = () => {
  const {
    addressState: { address, showModal, initialValues },
    addressDispatch,
  } = useContext(AddressContext);
  // console.log(initialValues);
  return (
    <div className="profileAddress_page">
      <div className="profileAddress_header">
        <h2>My Addresses</h2>
        <button
          onClick={() => addressDispatch({ type: "SHOW_MODAL", payload: true })}
        >
          <h3>Add New Address</h3>
        </button>
      </div>
      <hr />
      <ul className="profileAddress_list">
        {address?.map((add) => {
          const { _id, name, city, state, pincode, mobile } = add;
          return (
            <li key={_id}>
              <p>{name}</p>
              <p>
                {city}, {state}, {pincode}
              </p>
              <p>{mobile}</p>
              <div>
                <button
                  className="profileAddress_edit_btn"
                  onClick={() => {
                    console.log(add);
                    addressDispatch({ type: "EDIT_ADDRESS", payload: add });
                    addressDispatch({ type: "SHOW_MODAL", payload: true });
                  }}
                >
                  Edit
                </button>
                <button
                  className="profileAddress_delete_btn"
                  onClick={() =>
                    addressDispatch({
                      type: "DELETE_ADDRESS",
                      payload: { id: _id },
                    })
                  }
                >
                  Delete
                </button>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>

      {showModal && (
        <div className="profileAddress_modal">
          <AddressModal />
        </div>
      )}
    </div>
  );
};

export default ProfileAddress;
