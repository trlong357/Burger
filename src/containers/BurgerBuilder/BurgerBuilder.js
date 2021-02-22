import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  // -----------
  // constructor(props){
  //   super(props);
  //   this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };
  // -------------
  render() {
    // console.log(
    //   "BurgerBuilder ingredients[salad]",
    //   this.state.ingredients["salad"]
    // );
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Control</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
