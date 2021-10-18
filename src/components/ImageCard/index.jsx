import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Skeleton from "../Skeleton";

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

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  });

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  );
};

ImageCard.propTypes = {
  photo: PropTypes.string,
  title: PropTypes.string,
};

ImageCard.defaultProps = {
  photo: null,
  title: null,
};

export default ImageCard;
