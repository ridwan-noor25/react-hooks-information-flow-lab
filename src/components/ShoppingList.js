import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";
import items from "../data/items"; // or wherever your data lives

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const itemsToDisplay = items.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
