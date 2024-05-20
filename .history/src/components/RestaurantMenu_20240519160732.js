import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo.cards?.find(
    (card) => card.card?.card?.info?.name
  );
  const groupedCard = resInfo.cards?.find((card) => card.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCardsContainer = groupedCard?.find(
    (card) => card.card?.card?.itemCards
  );
  const itemCards = itemCardsContainer?.card?.card?.itemCards;

  const categories = resInfo.cards
    ?.find((card) => card.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-8 text-2xl">
        {restaurantInfo?.card?.card?.info?.name}
      </h1>
      <p className="font-bold text-lg mb-5">
        {restaurantInfo?.card?.card?.info?.cuisines?.join(", ")}
      </p>

      <h3 className="font-bold text-lg mb-5">
        {restaurantInfo?.card?.card?.info?.costForTwoMessage}
      </h3>
      <ul>
        {itemCards &&
          itemCards.map((item, index) => (
            <li key={index}>{item?.card?.info?.name}</li>
          ))}
      </ul>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => set}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
