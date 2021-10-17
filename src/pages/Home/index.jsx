import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextField, IconButton } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import {
  Container,
  Logo,
  Search,
  Wrapper,
  Carousel,
  CarouselTitle,
} from "./styles";
import logo from "../../assets/logo.svg";
import restaurante from "../../assets/restaurante-fake.png";
import { Card, RestaurantCard, Modal, Map } from "../../components";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo
            src={logo}
            alt="Restaurant Finder"
            style={{ alignSelf: "center" }}
          />
          <TextField
            label="Pesquisar restaurantes"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <CarouselTitle>Na sua área</CarouselTitle>
          <Carousel
            infinite
            speed={300}
            slidesToShow={4}
            slidesToScroll={4}
            adaptiveHeight
          >
            {restaurants.map((restaurant) => (
              <Card
                photo={
                  restaurant.photos
                    ? restaurant.photos[0].getUrl()
                    : restaurante
                }
                title={restaurant.name}
                key={restaurant.place_id}
              />
            ))}
          </Carousel>
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
