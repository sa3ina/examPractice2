import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ChefSection from "../components/ChefSection";
import Menu from "./Menu";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ChefSection />
      <Menu />
    </>
  );
};

export default Home;
