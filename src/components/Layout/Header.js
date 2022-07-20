import React from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Moody Meals</h1>
        <HeaderCartButton onClicking = {props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        {/* Above we can't use dot(.) to access classname as it contains a dash(-) in its name */}
        <img src={mealsImage} alt="Chhappan Bhog" />
      </div>
    </React.Fragment>
  );
};

export default Header;
