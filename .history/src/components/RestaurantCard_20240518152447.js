
import React from "react";
import PropTypes from "prop-types";  // Importing PropTypes for prop validation
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
  } = resData.info;

  return (
    <div className="m-2 p-2 w-48 bg-gray-50 hover:bg-gray-200">
      <img
        className="rounded py-2 text-lg"
        src={`${CDN_URL + cloudinaryImageId}`}
        alt={name}
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

RestaurantCard.propTypes = {
  resData: PropTypes.shape({
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cloudinaryImageId: PropTypes.string.isRequired,
      cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
      costForTwo: PropTypes.string.isRequired,
     
    }).isRequired,
  }).isRequired,
};

export default RestaurantCard;