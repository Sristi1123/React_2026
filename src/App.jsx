import "./App.css"
import ReactDOM from "react-dom/client";
// import ProductTab from "./ProductTab.jsx"

// // function App(){
// //   return <ProductTab/>
// // }
// // //React element 
// // const heading = (
// //   <div>
// //     <h1>This is my first react</h1>
// //   </div>
// // );
// // //Component Coposition
// // const Title=()=>(       //functional react component
// //   <h1>This is my function component</h1>
// // );
// // const Headings=()=>(
  
// //   <div>
// //     {heading}
// //     <Title/>
// //     <h1>used composition component</h1>
// //   </div>
// // );
// // Functional component
// const Title=function (){
//   return <h1>This is my function component</h1>
// };     

// const root=ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<Headings/>);
// root.render(<Title/>);
// // export default Headings;
// export default Title;

/*
* -Home
      : LOGO
      : Home
      : About
      : Contact
      : Cart
      : Login
      : SignUp
  -Body
      : Search
      : RestaurantList
          : RestaurantCard
  -Footer
      : Copyright
      : Links
      : Address
      : Contact
      : SocialLinks
*/ 
const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://c8.alamy.com/comp/2RXNF32/organic-vegan-100-with-leaves-bio-eco-icon-or-symbol-lactose-free-vegan-no-meat-healthy-fresh-food-green-logo-vegetarian-healthy-food-natur-2RXNF32.jpg" alt="logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Login</li>
          <li>SignUp</li>
        </ul>
      </div>
    </div>
  )
}
const RestaurantCard=({resData})=>{ 
  const {info}=resData;
  return(
    <div className="res-card" style={{backgroundColor:"grey"}}>
      <img className="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${info.cloudinaryImageId}`} alt={info.name} />
      <h3>{info.name}</h3>
      <h4>{info.cuisines.join(", ")}</h4>
      <h4>{info.avgRating} Stars</h4>
      <h4>{info.sla.deliveryTime} mins</h4>
    </div>
  )
};
const resObj=[
  {
    "info": {
      "id": "999538",
      "name": "Shree Sweets & Namkeen",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/7/be59858d-90f6-4995-9465-5b8fea9d8b90_999538.jpg",
      "locality": "Vinod Nagar",
      "areaName": "Amloh Road",
      "costForTwo": "₹200 for two",
      "cuisines": ["Sweets", "Snacks", "Bakery"],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "582785",
      "avgRatingString": "4.4",
      "totalRatingsString": "707",
      "sla": {
        "deliveryTime": 71,
        "lastMileTravel": 11.2,
        "serviceability": "SERVICEABLE",
        "slaString": "70-80 mins",
        "lastMileTravelString": "11.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-03-24 22:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹39"
      }
    }
  },
  {
    "info": {
      "id": "1051459",
      "name": "Sardar Bakery",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/1/3ae3a7b5-b6b8-4d87-8ed9-2aa865b65944_1051459.jpg",
      "locality": "Vinod Nagar",
      "areaName": "Vinod Nagar",
      "costForTwo": "₹150 for two",
      "cuisines": ["Bakery", "Cakes & Pastries", "Snacks"],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "254529",
      "avgRatingString": "4.5",
      "totalRatingsString": "613",
      "sla": {
        "deliveryTime": 59,
        "lastMileTravel": 12.7,
        "serviceability": "SERVICEABLE",
        "slaString": "58-63 mins",
        "lastMileTravelString": "12.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-03-24 09:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F"
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
      "totalRatingsString": "578",
      "sla": {
        "deliveryTime": 79,
        "lastMileTravel": 13.4,
        "serviceability": "SERVICEABLE",
        "slaString": "75-85 mins",
        "lastMileTravelString": "13.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-03-24 21:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "aggregatedDiscountInfoV3": {
        "header": "₹200 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
      }
    }
  },
  {
    "info": {
      "id": "258745",
      "name": "Barista Coffee",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/10/dd2899ce-4470-41e5-9b25-d0eb411a91e1_258745.JPG",
      "locality": "The celebration bazaar",
      "areaName": "Khanna",
      "costForTwo": "₹400 for two",
      "cuisines": ["Beverages", "Snacks", "Desserts"],
      "avgRating": 4,
      "parentId": "416281",
      "avgRatingString": "4.0",
      "totalRatingsString": "14",
      "sla": {
        "deliveryTime": 91,
        "lastMileTravel": 13.2,
        "serviceability": "SERVICEABLE",
        "slaString": "88-98 mins",
        "lastMileTravelString": "13.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-03-24 09:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹158"
      }
    }
  },
  {
    "info": {
      "id": "1157619",
      "name": "Jain Sweets Since 1990",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/24/7fb82fd9-ba8b-4296-8650-dcb48bd39f8e_1157619.jpg",
      "locality": "Vinod Nagar",
      "areaName": "G.T Road",
      "costForTwo": "₹150 for two",
      "cuisines": ["Sweets", "Snacks", "Bakery"],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "669318",
      "avgRatingString": "4.4",
      "totalRatingsString": "23",
      "sla": {
        "deliveryTime": 78,
        "lastMileTravel": 12,
        "serviceability": "SERVICEABLE",
        "slaString": "75-85 mins",
        "lastMileTravelString": "12.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-03-24 20:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F"
    }
  },
  {
    "info": {
      "id": "450752",
      "name": "Prem Vaishno Dhaba",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/1/16b174e9-7eed-42f6-afd0-b41c990bde73_450752 (1).jpg",
      "locality": "GT Road",
      "areaName": "G.T Road",
      "costForTwo": "₹200 for two",
      "cuisines": ["North Indian", "Tandoor", "Punjabi"],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "261200",
      "avgRatingString": "4.6",
      "totalRatingsString": "910",
      "sla": {
        "deliveryTime": 78,
        "lastMileTravel": 12.5,
        "serviceability": "SERVICEABLE",
        "slaString": "75-85 mins",
        "lastMileTravelString": "12.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-03-24 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      }
    }
  },
  {
    "info": {
      "id": "1346615",
      "name": "Kanwal Fresh Box",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/11/eda80326-5877-4235-a499-00ff1c8c620d_1346615.jpg",
      "locality": "Vinod Nagar",
      "areaName": "Vinod Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": ["Salads", "Indian", "Beverages"],
      "veg": true,
      "parentId": "765935",
      "avgRatingString": "NEW",
      "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 11.1,
        "serviceability": "SERVICEABLE",
        "slaString": "50-60 mins",
        "lastMileTravelString": "11.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-03-24 22:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "isNewlyOnboarded": true
    }
  },
  {
    "info": {
      "id": "877190",
      "name": "I Love Mocktails",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/27/543b008b-3b06-410d-83f0-5cd338069475_877190.jpg",
      "locality": "Guru Nanak Nagar",
      "areaName": "Vinod Nagar",
      "costForTwo": "₹199 for two",
      "cuisines": ["Beverages", "Cafe"],
      "veg": true,
      "parentId": "514237",
      "avgRatingString": "--",
      "sla": {
        "deliveryTime": 82,
        "lastMileTravel": 12,
        "serviceability": "SERVICEABLE",
        "slaString": "80-90 mins",
        "lastMileTravelString": "12.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-03-24 22:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F"
    }
  }
]
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>

      <div className="res-container">
        {resObj.map((res, index) => (
          <RestaurantCard key={index} resData={res} />
        ))}
      </div>
    </div>
  );
};
const AppLayout=()=>{
  return(
    <div className="app">
      {/* Header */}
      {/* Body */}
      {/* Footer */}
       <Header/>
       <Body/>
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
export default AppLayout;