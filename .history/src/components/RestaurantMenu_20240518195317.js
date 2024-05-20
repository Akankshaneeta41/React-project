import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo.cards?.find(
    (card) => card.card?.card?.info?.name
  );
  const groupedCard = resInfo.cards?.find((card) => card.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // Find the card containing itemCards
  const itemCardsContainer = groupedCard?.find(
    (card) => card.card?.card?.itemCards
  );
  const itemCards = itemCardsContainer?.card?.card?.itemCards;

  

  const categories = resInfo.cards
    ?.find((card) => card.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.card?.["@type"] === 
      "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge"
    );

//console.log(categories);

  return (
    <div className="menu">
      <h1>{restaurantInfo?.card?.card?.info?.name}</h1>
      <h2>{restaurantInfo?.card?.card?.info?.cuisines?.join(", ")}</h2>
      <h3>{restaurantInfo?.card?.card?.info?.costForTwoMessage}</h3>
      <ul>
        {itemCards &&
          itemCards.map((item, index) => (
            <li key={index}>{item?.card?.info?.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
