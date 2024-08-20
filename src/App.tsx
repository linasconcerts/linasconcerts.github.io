import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Photography from "./components/Photography";
import Flyer from "./components/Flyer";
import SocialMediaManagement from "./components/SocialMediaManagement";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Photography />
      <Flyer />
      <SocialMediaManagement />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
