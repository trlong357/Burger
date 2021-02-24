import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1,
  meat: 2,
  bacon: 2,
}; //global variable -- ALL leter in UPPERCASE

class BurgerBuilder extends Component {
  // -----------
  // constructor(props){
  //   super(props);
  //   this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };
  // -------------

  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
  };
  render() {
    // console.log(
    //   "BurgerBuilder ingredients[salad]",
    //   this.state.ingredients["salad"]
    // );
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientsAdded={this.addIngredientsHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
