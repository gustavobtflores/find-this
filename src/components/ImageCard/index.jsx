import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 90px;
  height: 90px;
  border-radius: 4px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.font.regular};
  color: #ffffff;
  font-size: 0.8rem;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px 0;
`;

const ImageCard = ({ photo, title }) => (
  <Card photo={photo}>
    <Title>{title}</Title>
  </Card>
);

ImageCard.propTypes = {
  photo: PropTypes.string,
  title: PropTypes.string,
};

ImageCard.defaultProps = {
  photo: null,
  title: null,
};

export default ImageCard;
