import React, { Component } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.show !== this.props.show) {
      return true;
      // return nextProps.show != this.props.show
    }
    return false;
  }
  componentDidUpdate() {
    console.log("[Modal.js] will Update");
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.propsshow} clicked={this.propsmodalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
            //  opacity -- https://www.w3schools.com/css/css_image_transparency.asp
          }}
        >
          {" "}
          {/*-100vh : slide it outside of the screen (vh: viewheight) */}
          {this.props.children}
          {/* <div></div> */}
        </div>
      </Aux>
    );
  }
}

export default Modal;
