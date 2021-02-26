import React from "react";
import classes from "./Logo.module.css";
import burgerLogo from "../../assets/images/burger-logo.png";
// Once we publish our app, we will get a real different folder where all the optimized, compiled and bundled ASSEETS are contained in. So these assets folder here to the source folder will not be shipped to the real server
const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
