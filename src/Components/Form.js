import React, { useRef } from "react";
import Input from "./Input";
import { useContext } from "react";
// import { CartContext } from "../assests/cart-context";

export default function Form(props) {
  //   const cartContext = useContext(CartContext);
  const inputRef = useRef();
  //   function submitHandler(e) {
  //     e.preventDefault();
  //     const cartObj = {
  //       ...props.data,
  //       quantity: Number(inputRef.current.value),
  //     };

  //     cartContext.updateCartArray(cartObj);
  //   }

  return (
    <form className="input-form">
      <Input
        label="Amount"
        input={{
          type: "number",
          min: "1",
          max: "5",
          id: "amount_" + props.data.id,
          defaultValue: "1",
          ref: inputRef,
        }}
      />
      <button type="submit">+Add</button>
    </form>
  );
}
