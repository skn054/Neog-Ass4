import React from "react";

import Item from "./Item";
import ItemCard from "./ItemCard";

export default function ItemList({ menus }) {
  const mealsList = menus.map(({ menu }) => {
    const { id, name, categories } = menu;
    // console.log("categories", categories);
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
            image={
              item.item_image_thumb_url
                ? item.item_image_thumb_url
                : "https://images.unsplash.com/photo-1619367300924-485907ff690d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1555&q=80"
            }
            rating={item.rating}
            item={item}
          />
        );
      });
    });
  });
  return (
    <section className="mt-8">
      <ItemCard>
        <ul>{mealsList}</ul>
      </ItemCard>
    </section>
  );
}
