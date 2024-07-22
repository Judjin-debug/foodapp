import React from "react";
import Item from "./Item";

const ItemList = ({ food, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <Item key={item.id} item={item} />
        ))
      )}
    </div>
  );
};

export default ItemList;
