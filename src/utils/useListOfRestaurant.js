import { useState, useEffect } from "react";
import { LIST_RES_URL } from "./constants";

const useListOfRestaurant = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(LIST_RES_URL);
      const json = await response.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurant(restaurants || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { listOfRestaurant, loading, error };
};

export default useListOfRestaurant;
