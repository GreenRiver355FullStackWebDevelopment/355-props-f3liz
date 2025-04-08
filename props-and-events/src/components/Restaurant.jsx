// renders each individual restaurants information
function Restaurant(props) {

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.restaurant.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>Address: {props.restaurant.address}</li>
        <li>Phone: {props.restaurant.phone}</li>
        <li>Type of food: {props.restaurant.cuisine}</li>
        <li>⭐ rating: {props.restaurant.rating}</li>
      </ul>
    </div>
  );
}

export default Restaurant;
