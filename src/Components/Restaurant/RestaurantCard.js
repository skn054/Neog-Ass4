import React from "react";

export default function RestaurantCard(props) {
  return (
    <div className="pt-4 px-[4px] pb-5 hover:outline-double">
      {/* <Link to={"/restaurant/" + props.id}>{props.children}</Link> */}
      {props.children}
    </div>
  );
}
