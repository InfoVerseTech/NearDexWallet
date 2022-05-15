import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import CardTitle from "../components/Home/CardTitle";
import SwapCard from "../components/Home/SwapCard";
import ConnectWallet from "../components/Modals/ConnectWallet";
import SearchBox from "../components/Home/SearchBox";
import DarkMode from "../layout/DarkMode";
const Home = () => {
  return (
    <>
      <Header />
      <SearchBox />
      <CardTitle />
      <SwapCard />
      <ConnectWallet />
      <Footer />
    </>
  );
};

export default Home;
