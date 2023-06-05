import "./CheckOut.css";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AddressContext } from "../../Context/AddressContext";
import { CartContext } from "../../Context/CartContext";
import { AddressModal } from "../Profile/AddressModal/AddressModal";

export const CheckOut = () => {
  const {
    addressState: { address, showModal, selectedAddressId, initialValues },
    addressDispatch,
  } = useContext(AddressContext);

  const {
    cartArray: { cart },
    emptyCart,
    totalPrice,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const selectedAddress =
    address?.find((add) => add._id === selectedAddressId) ?? initialValues;

  const { _id, name, city, pincode, state, mobile } = selectedAddress;

  //   const addNewAddressHandler = () => {
  //     addressDispatch({ type: SET_SHOW_ADDRESS_MODAL, payload: true });
  //     addressDispatch({
  //       type: RESET_ADDRESS_DETAILS,
  //       payload: initialAddressFormData,
  //     });
  //   };

  const placeOrderBtnHandler = () => {
    if (selectedAddressId === null) {
      toast.error("Please select an address for checking out!");
    } else if (cart?.length === 0) {
      toast.error("Please add something to cart for checking out!");
      navigate("/cart");
    } else {
      toast.success("Order successfully placed!");
      emptyCart();
      navigate("/delivery");
    }
  };

  //   useEffect(() => {
  //     addressDispatch({ type: SELECT_ADDRESS_CHECKOUT, payload: null });
  //   }, []);

  return (
    <div className="checkout_page">
      <h1>Checkout</h1>

      <div className="checkout_content">
        <div className="checkout_address">
          <h2>Select Address</h2>
          <div>
            <ul className="profileAddress_list">
              {address?.map((add) => {
                const { _id, name, city, state, pincode, mobile } = add;
                return (
                  <div key={_id}>
                    <input
                      type="radio"
                      name="addressCard_radio"
                      checked={selectedAddressId === _id}
                      onChange={() =>
                        addressDispatch({
                          type: "SELECT_ADDRESS_CHECKOUT",
                          payload: _id,
                        })
                      }
                    />
                    <li>
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
                            addressDispatch({
                              type: "EDIT_ADDRESS",
                              payload: add,
                            });
                            addressDispatch({
                              type: "SHOW_MODAL",
                              payload: true,
                            });
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
                  </div>
                );
              })}
            </ul>
          </div>

          <button
            className="checkout_address_btn"
            onClick={() =>
              addressDispatch({ type: "SHOW_MODAL", payload: true })
            }
          >
            Add New Address
          </button>
        </div>
        <div className="checkout_order_summary">
          <div>
            <h2>Order Summary</h2>
            <hr />
            <div className="checkout_row">
              <h3>Items ({cart?.length})</h3>
              <h3>Quantity</h3>
            </div>
            {cart?.map(({ _id, name, qty }) => (
              <div key={_id} className="checkout_row">
                <p>{name}</p>
                <p>{qty}</p>
              </div>
            ))}
          </div>
          <div className="checkout_price">
            <h3>Price Details</h3>
            <hr />
            <div className="checkout_row">
              <h3>Total Price</h3>
              <h3>{totalPrice}</h3>
            </div>
            {/* <div className="checkout_row">
              <h3>Total Discount</h3>
              <h3>- {totalDiscount}</h3>
            </div> */}
            <div className="checkout_row">
              <h3>Grand Total</h3>
              <h2>{totalPrice}</h2>
            </div>
          </div>
          {selectedAddressId !== null ? (
            <div>
              <h3>Delivery Details</h3>
              <hr />
              <h3>{name}</h3>
              <p>
                {city}, {state}, {pincode}
              </p>
              <p>{mobile}</p>
            </div>
          ) : (
            []
          )}
          <button onClick={() => placeOrderBtnHandler()}>Place Order</button>
        </div>
        {showModal && (
          <div className="checkout_addAddress_modal">
            <AddressModal />
          </div>
        )}
      </div>
    </div>
  );
};
