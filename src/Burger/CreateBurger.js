import React from "react";
import Cheese from "./BurgerComponents/Cheese/Cheese";
import Lattuce from "./BurgerComponents/Lattuce/Lattuce";
import Tomatoes from "./BurgerComponents/Tomatoes/Tomatoes";
import BreadLower from "./BurgerComponents/BreadLower/BreadLower";
import BreadUpper from "./BurgerComponents/BreadUpper/BreadUpper";
import { BurgerComponentEnum } from "../Resouces";

export default function CreateBurger(props) {
  const BurgerStack = props.burgerStack.map((item, index) => {
    switch (item) {
      case BurgerComponentEnum.CHEESE:
        return <Cheese />;
      case BurgerComponentEnum.LATTUCE:
        return <Lattuce />;
      case BurgerComponentEnum.TOMATOES:
        return <Tomatoes />;
      default:
        return null;
    }
  });

  return (
    <div style={{padding:'9%'}}>
      <BreadUpper />
      {BurgerStack}
      <BreadLower />
    </div>
  );
}


