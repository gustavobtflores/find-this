import React from "react";
import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";
import restaurante from "../../assets/restaurante-fake.png";

import {
  Address,
  Restaurant,
  RestaurantInfo,
  RestaurantPhoto,
  Title,
} from "./styles";

const RestaurantCard = ({ restaurant }) => (
  <Restaurant>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars
        count={5}
        isHalf
        value={restaurant.rating}
        edit={false}
        activeColor="#e7711c"
      />
      <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestaurantInfo>
    <RestaurantPhoto
      src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
      alt="Foto do restaurante"
    />
  </Restaurant>
);

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    vicinity: PropTypes.string.isRequired,
    formatted_address: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default RestaurantCard;
