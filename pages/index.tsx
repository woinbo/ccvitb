import React from "react";
import Head from "next/head";

import Header from "../components/index/Header";
import About from "../components/index/About";
import Team from "../components/index/Team";
import Article from "../components/index/Articles";
import Footer from "../components/common/Footer";
import Events from "../components/index/Events";

const Home = () => {
  return (
    <>
      <Head>
        <title>CODECHEF VIT BHOPAL - Home</title>
      </Head>
      <Header />
      <About />
      <Team />
      <Article />
      <Events />     
      <Footer />
   
    </>
  );
};

export default Home;
