import { LIST_RES_URL } from "./constants";
import { useState, useEffect } from "react";
const useListOfRestaurant = () => {

    const [ListOfRestaurant, setListOfRestaurant] = useState([]);
    
  
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(LIST_RES_URL);
        const json = await data.json();
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurants);
     
        };

    return ListOfRestaurant;

}

export default useListOfRestaurant;