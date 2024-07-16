import React from "react";
import Image from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={Image} alt="Investment" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
