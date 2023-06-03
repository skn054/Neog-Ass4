import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartCard } from "./CartCard";

export const Cart = () => {
  const {
    isLoadingCart,
    isErrorCart,
    cartArray: { cart },
    totalPrice,
    totalDiscount,
  } = useContext(CartContext);

  return (
    <div className="cart_page">
      <h1 className="cart_heading">Cart</h1>
      {isLoadingCart ? (
        <h1>Loading...</h1>
      ) : isErrorCart ? (
        <h1>Error </h1>
      ) : cart?.length === 0 ? (
        <div className="cart_empty">
          <h2>Oops! Your cart is empty! </h2>
          <NavLink to="/delivery">
            <button>Start shopping!</button>
          </NavLink>
        </div>
      ) : (
        <div className="cart_block">
          <div className="cart_block_items">
            <ul>
              {cart?.map((item) => (
                // <CartBookCard book={book} key={book._id} cartPage />
                <CartCard key={item.id} product={item} />
              ))}
            </ul>
          </div>
          <div className="cart_block_price_details_wrapper">
            <div className="cart_block_price_details">
              <div className="cart_block_price_details_heading">
                <h2>Price Details</h2>
                <h2>
                  ({cart?.length} item{cart?.length > 1 && "s"})
                </h2>
              </div>
              <hr />
              <div className="cart_block_price_details_prices">
                <div>
                  <h3>Total Price</h3>
                  <h3 className="cart_block_rupee">{totalPrice}</h3>
                </div>
                {/* <div>
                  <h3>Discount</h3>
                  <h3 className="cart_block_rupee">- {totalDiscount}</h3>
                </div> */}
              </div>
              <hr />
              <div className="cart_block_price_details_final">
                <div>
                  <h2>Subtotal</h2>
                  <h2 className="cart_block_rupee">
                    {/* {totalPrice - totalDiscount} */}
                    {totalPrice}
                  </h2>
                </div>
                <button>
                  <h2>Checkout</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
