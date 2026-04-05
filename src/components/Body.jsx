import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard"; // if separate
// import { resObj } from "../data"; // optional if you move data

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([
    {
      "info": {
      "id": "999538",
      "name": "Shree Sweets & Namkeen",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/7/be59858d-90f6-4995-9465-5b8fea9d8b90_999538.jpg",
      "locality": "Vinod Nagar",
      "areaName": "Amloh Road",
      "costForTwo": "₹200 for two",
      "cuisines": ["Sweets", "Snacks", "Bakery"],
      "avgRating": 3.7,
      "veg": true,
      "parentId": "582785",
      "avgRatingString": "3.7",
      "totalRatingsString": "707"
    }
  },
  {
    "info": {
      "id": "1051459",
      "name": "Sardar Bakery",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/1/3ae3a7b5-b6b8-4d87-8ed9-2aa865b65944_1051459.jpg",
      "locality": "Amloh Road",
      "areaName": "Amloh Road",
      "costForTwo": "₹200 for two",
      "cuisines": ["Bakery"],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "582785",
      "avgRatingString": "4.3",
      "totalRatingsString": "500"
    }
  },
  {
    "info": {
      "id": "419295",
      "name": "Khanna Sweets",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/4/76e15f2c-bc49-481c-b533-9fac3b56b10d_419295.jpg",
      "locality": "GT Road",
      "areaName": "Vinod Nagar",
      "costForTwo": "₹150 for two",
      "cuisines": ["Sweets", "Snacks"],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "117484",
      "avgRatingString": "4.2",
      "totalRatingsString": "578"
    }
  }
]);
  return (
    <div className="body">
      <div className="Search">Search</div>

      <div className="filter">
        <button className="filter-btn" onClick={() => {
            setListofRestaurants(listofRestaurants.filter(res => res.info.avgRating > 4.0));
          console.log(listofRestaurants);
        }}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listofRestaurants.map((res, index) => (
          <RestaurantCard key={index} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;