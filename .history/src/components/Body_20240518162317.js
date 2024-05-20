import React, { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, {withPromtedLabel}  from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestaurant from "../utils/useListOfRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { listOfRestaurant, setListOfRestaurant, loading, error } = useListOfRestaurant();

console.log("body render",listOfRestaurant);

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromtedLabel();

  if (!onlineStatus) {
    return <h1>Looks like you are offline! Please check your internet connection.</h1>;
  }

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <h1>Failed to fetch data. Please try again later.</h1>;
  }

  const filteredList = listOfRestaurant.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-1 p-1">
          <input
            type="text"
            className="border border-solid border-black rounded"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="ml-2 rounded"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-1 flex items-center rounded">
          <button
            className="px-2 py-1 bg-gray-100"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap rounded h-40 mb-12">
        {filteredList.map((restaurant, index) => (
          <Link to={"/restaurants/" + restaurant.info.id} key={index}>
restaurant.info.isOpen ? <RestaurantCardPromoted/> : <RestaurantCard resData={restaurant}/>

            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
