import React from "react";
import Form from "./Form";

export default function Item(props) {
  // console.log(props)
  return (
    <div className="meal-item">
      <div className="flex  justify-center gap-3">
        <div>
          <img src={props.image} alt={props.description} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="name">{props.name}</h3>
          <div>
            <p>{props.rating?.total_rating_text}</p>
          </div>
          <div className="price">
            <span>&#8377;</span>
            {props.price}
          </div>
        </div>
      </div>
      <div>
        <Form data={props} />
      </div>
    </div>
  );
}
