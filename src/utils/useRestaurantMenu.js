import { MENU_API_URL } from "./constants";
import React, { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(MENU_API_URL + resId);
      const json = await data.json();
      setResInfo(json.data);
    };

    fetchData();
  }, [resId]);

  return resInfo;
}

export default useRestaurantMenu;
