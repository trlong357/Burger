import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      //Array() - create an array
      // {
      //   console.log(igKey);
      // }

      return [...Array(props.ingredients[igKey])].map((_, i) => {
        console.log(i);
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  // reduce() - dùng để thực thi một hàm lên từng phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất.

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Pls adding ingredients!!!</p>;
  }

  console.log(transformedIngredients);
  //keys method which extracts the key of a given object and turns that into an array
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
