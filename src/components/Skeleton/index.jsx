import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const KeyFrameLoading = keyframes`
  0% {
    opacity: 0.5
  }

  100% {
    opacity: 1
  }
`;

const LoadingSkeleton = styled.div`
  background-color: gray;
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

LoadingSkeleton.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default ({ width, height }) => (
  <LoadingSkeleton width={width} height={height} />
);
