import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";
import PropTypes from "prop-types";

export const MapContainer = (props) => {
  const { google } = props;
  return <Map google={google} centerAroundCurrentLocation />;
};

MapContainer.propTypes = {
  google: PropTypes.node.isRequired,
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: "pt-BR",
})(MapContainer);
