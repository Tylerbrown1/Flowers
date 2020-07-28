import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ourstory from "./components/Ourstory";
import Handmade from "./components/Handmade";

function App() {
  return (
    <div className="open">
      <Header />
      <Hero />
      <Ourstory />
      <Handmade />
    </div>
  );
}

export default App;
