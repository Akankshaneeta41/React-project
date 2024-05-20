import React, { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestaurant from "../utils/useListOfRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { listOfRestaurant, setListOfRestaurant, loading, error } = useListOfRestaurant();

  const onlinestatus = useOnlineStatus();

  if (onlinestatus === false) {
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
      <div className="filter">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant, index) => (
          <Link to={"/restaurants/" + restaurant.info.id} key={index}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
