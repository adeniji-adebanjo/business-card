import React from "react";
import "./index.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import BodyContent from "./components/BodyContent";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <div className="main-container">
        <Hero />
        <Header />
        <Buttons />
        <BodyContent />
        <Footer />
        <Analytics />
      </div>
    </>
  );
}
