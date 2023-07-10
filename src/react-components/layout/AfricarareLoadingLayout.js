import React from "react";
import PropTypes from "prop-types";
import styles from "./AfricarareLoadingLayout.scss";
import loadingBackground from "../../assets/images/africarare-splash-loader.gif";
import { Column } from "../layout/Column";

export function AfricarareLoadingLayout({ bottom }) {
  return (
    <div className={styles.loadingScreenLayout} style={{ backgroundImage: `url(${loadingBackground})` }}>
      {bottom && (
        <Column center className={styles.bottom}>
          {bottom}
        </Column>
      )}
    </div>
  );
}

AfricarareLoadingLayout.propTypes = {
  center: PropTypes.node,
  bottom: PropTypes.node
};
