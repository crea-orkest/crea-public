import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const Spinner = () => (
  <span className={classNames(styles.center, styles.loader)}></span>
);
