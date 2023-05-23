import React from "react";

import Item from "./Item";
import ItemCard from "./ItemCard";

export default function ItemList({ menus }) {
  const mealsList = menus.map(({ menu }) => {
    const { id, name, categories } = menu;
    console.log("categories", categories);
    return categories.map(({ category }) => {
      const { items } = category;
      console.log("items", items);
      return items.map(({ item }) => {
        return (
          <Item
            id={item.id}
            key={item.id}
            name={item.name}
            description={item.desc}
            price={item.price}
            image={item.item_image_thumb_url}
            rating = {item.rating}
          />
        );
      });
    });
  });
  return (
    <section className="meal-list">
      <ItemCard>
        <ul>{mealsList}</ul>
      </ItemCard>
    </section>
  );
}
