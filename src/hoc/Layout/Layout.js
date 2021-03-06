import React, { Component } from "react";
import Aux from "../Aux/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerOpenHandler = () => {
    let currentShow = this.state.showSideDrawer;
    this.setState({ showSideDrawer: !currentShow });
  };
  render() {
    return (
      <Aux>
        <Toolbar
          clicked={this.sideDrawerOpenHandler}
          drawerShape={this.state.showSideDrawer}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
