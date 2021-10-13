import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  height: 90px;
  padding: 5px;
  border-radius: 4px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.font.regular};
  color: #ffffff;
  font-size: 0.8rem;
`;

const ImageCard = ({ photo, title }) => (
  <Card photo={photo}>
    <Title>{title}</Title>
  </Card>
);

ImageCard.propTypes = {
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageCard;
