import React from "react";
import { boilerPlateData } from "./data.js";
import Card from "./components/Card"

export default () => {
  const generateCardsFromData = collection => {
    return collection.map(item => {
      return (
        <Card 
          id={item.id} 
          name={item.name}
          price={item.price} 
          descriptions={item.description} 
        />
      );
    });
  };

  return <>{generateCardsFromData(boilerPlateData)}</>;
};
