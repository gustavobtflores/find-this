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
  ModalTitle,
  ModalContent,
  ModalOpenNow,
} from "./styles";
import logo from "../../assets/logo.svg";
import restaurante from "../../assets/restaurante-fake.png";
import {
  Card,
  RestaurantCard,
  Modal,
  Map,
  Loader,
  Skeleton,
} from "../../components";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector(
    (state) => state.restaurants
  );

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
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
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua área</CarouselTitle>
              <Carousel
                infinite
                autoplay
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
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
            key={restaurant.place_id}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>
              {restaurantSelected?.formatted_phone_number}
            </ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalOpenNow openNow={restaurantSelected?.opening_hours?.open_now}>
              {restaurantSelected?.opening_hours?.open_now
                ? `Aberto agora`
                : "Fechado neste momento"}
            </ModalOpenNow>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
};

export default Home;
