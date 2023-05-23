import React from "react";
import { Link } from "react-router-dom";
export default function RestaurantCard(props) {
  return (
    <div className="pt-4 px-[4px] pb-5 hover:outline-double">
      <Link to={"/restaurant/" + props.id}>{props.children}</Link>
    </div>
  );
}
