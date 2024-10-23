import React from "react";

import Hero from "./HomeSubComponents/Hero";
import Products from "./HomeSubComponents/Products";
import Partners from "./HomeSubComponents/Partners";
import Exam from "./HomeSubComponents/Exam";

import Contact2 from "./HomeSubComponents/Contact2";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import Work from "./HomeSubComponents/Work";

const Home = () => {
  return (
    <div>

      <Helmet>
        <title>Home - NIB</title>
        <meta name="description" content="Welcome to Notion Insurance Broker. We provide the best insurance services in India." />
        <meta name="keywords" content="Insurance, Broker, Notion Insurance, Health Insurance, Life Insurance" />
        <link rel="canonical" href="https://www.notioninsurance.com/" />
      </Helmet>



      <Hero />
      <Products />
      <Partners />
      <Exam />
      <Work/>

      <Contact2 />
    </div>
  );
};

export default Home;
