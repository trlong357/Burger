import React from "react";
import classes from "./Modal.module.css";
const modal = (props) => (
  <div className={classes.Modal}>
    {props.children}
    {/* <div></div> */}
  </div>
);

export default modal;
