import React from "react";
import PropTypes from "prop-types";

import { Spinner } from "../misc/Spinner";
import { AfricarareLoadingLayout } from "../layout/AfricarareLoadingLayout";

// eslint-disable-next-line no-unused-vars
export function LoadingScreen({ message, infoMessages }) {
  return (
    <AfricarareLoadingLayout
      bottom={
        <>
          <Spinner />
          <p>{message}</p>
        </>
      }
    />
  );
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
