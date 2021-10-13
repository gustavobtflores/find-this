import React, { useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import {
  Container,
  Logo,
  Search,
  Wrapper,
  Map,
  Carousel,
  CarouselTitle,
} from "./styles";
import logo from "../../assets/logo.svg";
import restaurant from "../../assets/restaurante-fake.png";
import { Card } from "../../components";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

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
            <Card photo={restaurant} />
            <Card photo={restaurant} title="melhor restaurante da cidade" />
            <Card photo={restaurant} />
            <Card photo={restaurant} />
            <Card photo={restaurant} />
            <Card photo={restaurant} />
          </Carousel>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
