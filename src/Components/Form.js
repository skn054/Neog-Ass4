import React, { useRef } from "react";
import Input from "./Input";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { CartContext } from "../Context/CartContext";
// import { CartContext } from "../assests/cart-context";

export default function Form(props) {
  //   const cartContext = useContext(CartContext);
  const { token } = useContext(AuthContext);
  const {
    addToCart,
    cartArray: { cart },
    itemInCart,
  } = useContext(CartContext);
  const inputRef = useRef();
  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();

    if (token) {
      itemInCart(props.data.item)
        ? navigate("/cart")
        : addToCart(props.data.item, token);
    } else {
      navigate("/login");
      toast.error("Login to add items to cart");
    }
  }

  return (
    <form className="input-form" onSubmit={submitHandler}>
      {/* <Input
        label="Amount"
        input={{
          type: "number",
          min: "1",
          max: "5",
          id: "amount_" + props.data.id,
          defaultValue: "1",
          ref: inputRef,
        }}
      /> */}
      <button type="submit">
        {" "}
        {itemInCart(props.data.item) ? "Go To Cart" : "+Add"}
      </button>
    </form>
  );
}
