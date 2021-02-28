import React, { Component } from "react";
import classes from "./DrawerToggle.module.css";
class DrawerToggle extends Component {
  render() {
    // let attachedClasses = [classes.container];
    // if (this.props.shape) {
    //   attachedClasses = [classes.change];
    // }
    return (
      // <div onClick={this.props.clicked}>
      <div onClick={this.props.clicked}>
        {/* <div className={attachedClasses}> */}
        <div className={classes.bar1}></div>
        <div className={classes.bar2}></div>
        <div className={classes.bar3}></div>
        {/* </div> */}
      </div>
    );
  }
}

export default DrawerToggle;
