import React from "react";
import Navbar2 from "../components/Landingpage1/Navbar2";
import Firstheading from "./components2/Firstheading";
import FAQ from "./components2/FAQ";
import Accordian from "./components2/Accordion";
import Services from "./components2/Services";
import Client from "./components2/Client";
import Footer from "../components/Landingpage1/Footer";

const Index = () => {
  return (
    <>
    <div className="border">
      <Navbar2 pricingScreen/>
      </div>
      <Firstheading />
      <FAQ />
      <Accordian />
      <Services />
      <Client />
      <Footer />
    </>
  );
};

export default Index;
