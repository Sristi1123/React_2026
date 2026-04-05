import React from "react";

const RestaurantCard = ({ resData }) => {
  const { info } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "grey" }}>
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.cloudinaryImageId}`}
        alt={info.name}
      />
      <h3>{info.name}</h3>
      <h4>{info.cuisines.join(", ")}</h4>
      <h4>{info.avgRating} Stars</h4>
      <h4>{info?.sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;