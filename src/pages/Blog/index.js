import React from "react";
import Test from "./Test";
import Navbar2 from "../../components/Landingpage1/Navbar2";
import Homeblog from "./Homeblog";
import Zebra from "./Zebra";

const Index2 = () => {
  return (
    <>
      <div className="border">
        <Navbar2 pricingScreen />
      </div>
      <Test />
      <Homeblog />
      <Zebra/>
    </>
  );
};

export default Index2;
