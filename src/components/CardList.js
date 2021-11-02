import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const CardList = () => {
  const cards = useSelector((state) => state.cardsReducer.cards);

  return (
    <div className="flex flex-wrap">
      {cards.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </div>
  );
};

export default CardList;
