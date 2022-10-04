import React from "react";
import "./index.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
// import About from "./components/About";
// import Interest from "./components/Interest";
// import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="main-container">
      <Hero />
      <Header />
      <Buttons />
      {/* <About />
      <Interest />
      <Footer /> */}
    </div>
  );
}
