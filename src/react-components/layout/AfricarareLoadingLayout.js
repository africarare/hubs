import React from "react";

import styles from "./AfricarareLoadingLayout.scss";
import loadingBackground from "../../assets/images/africarare-splash-loader.gif";

export function AfricarareLoadingLayout() {
  return <div className={styles.loadingScreenLayout} style={{ backgroundImage: `url(${loadingBackground})` }}></div>;
}
