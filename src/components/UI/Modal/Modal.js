import React from "react";
import classes from "./Modal.module.css";
const modal = (props) => (
  <div
    className={classes.Modal}
    style={{
      transform: props.show ? "translateY(0)" : "translateY(-100vh)",
      opacity: props.show ? "1" : "0",
      //  opacity -- https://www.w3schools.com/css/css_image_transparency.asp
    }}
  >
    {" "}
    {/*-100vh : slide it outside of the screen (vh: viewheight) */}
    {props.children}
    {/* <div></div> */}
  </div>
);

export default modal;
