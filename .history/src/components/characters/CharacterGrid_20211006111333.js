import React from "react";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </section>
  );
};

export default CharacterGrid;
