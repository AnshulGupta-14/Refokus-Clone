import React from "react";
import Images from "./Images";
import Stripe from "./Stripe";
import Stripes from "./Stripes";
import Products from "./Products";
import Marquees from "./Marquees";
import Cards from "./Cards";
import Footer from "./Footer";

const Work = () => {  
  return (
    <div className="w-full pt-20">
      <div className="relative w-[70%] mx-auto text-center">
        <h1 className="text-[30vw] font-medium leading-tight traking-tight select-none mt-10">
          work
        </h1>
        <Images></Images>
      </div>
      <Stripes></Stripes>
      <Products></Products>
      <Marquees></Marquees>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
};

export default Work;
