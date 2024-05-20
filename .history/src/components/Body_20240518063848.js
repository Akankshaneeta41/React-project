// import RestaurantCard from "./RestaurantCard";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import React from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import useListOfRestaurant from "../utils/useListOfRestaurant";
// import { LIST_RES_URL } from "../utils/constants";

// const Body = () => {
//   const [searchText, setSearchText] = useState();
//   const resList = useListOfRestaurant();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(LIST_RES_URL);
//     const json = await data.json();
//     resList(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };

//   const onlinestatus = useOnlineStatus();

//   if (onlinestatus === false)
//     return (
//       <h1>Look like you are offline! please check your internet connection.</h1>
//     );

//   return resList.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input
//             type="text"
//             className="search-bar"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             className="search-btn"
//             onClick={() => {
//               const filteredList = resList.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               resList(filteredList);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <button
//           className="filter-btn"
//           onClick={() => {
//             filterRes = resList.filter((res) => res.info.avgRating > 4);
//             resList(filterRes);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="res-container">
//         {resList.map((restaurant, index) => (
//           <Link to={"/restaurants/" + restaurant.info.id}>
//             <RestaurantCard key={index} resData={restaurant} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestaurant from "../utils/useListOfRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const resList = useListOfRestaurant();
  const onlinestatus = useOnlineStatus();

  if (onlinestatus === false) {
    return <h1>Looks like you are offline! Please check your internet connection.</h1>;
  }

  if (!Array.isArray(resList)) {
    return <Shimmer />;
  }

  const filteredListOfRestaurant = resList.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterListOfRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterRes = resList.filter((res) => res.info.avgRating > 4);
            setFilterListOfRestaurant(filterRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurant.map((restaurant, index) => (
          <Link to={"/restaurants/" + restaurant.info.id} key={index}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
