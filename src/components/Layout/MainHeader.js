import React from "react";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>Redux Cart</h1>
      <nav>
        <li>
          <CartButton />
        </li>
      </nav>
    </header>
  );
};

export default MainHeader;
