import React from "react";
import Form from "./Form";

export default function Item(props) {
  console.log("rating", Number(props.rating?.value));
  return (
    <div className="meal-item">
      <div className="flex  justify-center gap-3 h-32">
        <div className="h-full w-32">
          <img src={props.image} alt={props.description} className="h-full w-full" />
        </div>
        <div className="flex flex-col gap-2 items-start h-full">
          <h3 className="name">{props.name}</h3>
          <div>
            <div>
              {props.rating?.value && (
                <>
                  {[...Array(Math.floor(props.rating?.value))].map((star) => {
                    return (
                      <span style={{ color: "#fc0", background: "#fff" }}>
                        &#9733;
                      </span>
                    );
                  })}
                  {[...Array(5 - Math.floor(props.rating?.value))].map(
                    (star) => {
                      return <span className="star">&#9733;</span>;
                    }
                  )}
                </>
              )}
            </div>
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
