import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import CardTitle from '../components/Home/CardTitle';
import SwapCard from '../components/Home/SwapCard';
import ConnectWallet from '../components/Modals/ConnectWallet';

const Home = () => {
  return (
    <>
        <Header/>
        <CardTitle/>
        <SwapCard/>
        <ConnectWallet/>
        <Footer/>
    </>
  )
}

export default Home