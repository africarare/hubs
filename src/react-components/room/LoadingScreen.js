import React from "react";
import PropTypes from "prop-types";

import { AfricarareLoadingLayout } from "../layout/AfricarareLoadingLayout";

// eslint-disable-next-line no-unused-vars
export function LoadingScreen({ message, infoMessages }) {
  return <AfricarareLoadingLayout />;
}

LoadingScreen.propTypes = {
  message: PropTypes.node,
  infoMessages: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.node.isRequired,
      message: PropTypes.node.isRequired
    })
  )
};

LoadingScreen.defaultProps = {
  infoMessages: []
};
