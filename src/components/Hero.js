import React from "react";
import Adebanjo from "../images/adebanjo.png";

export default function Hero() {
  return (
    <div className="container">
      <img src={Adebanjo} className="hero-img" alt="Adebanjo" />
      {/* <h3>Adebanjo is my name!</h3> */}
    </div>
  );
}
