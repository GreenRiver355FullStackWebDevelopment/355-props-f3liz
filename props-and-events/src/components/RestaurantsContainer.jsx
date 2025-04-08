// container for each restaurant and passes the data for each one to the next component
import Restaurant from "./Restaurant";
import { restaurants } from "../data/data.js"

function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {restaurants.map( restaurant => (
        <Restaurant
          restaurant={restaurant}
        />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
