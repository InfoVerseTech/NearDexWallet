import { useState } from 'react';
import Head from 'next/head';
import * as nearAPI from "near-api-js";
const { connect, keyStores, WalletConnection } = nearAPI;

export default function NearComp() {
  const [Account , SetAccount] = useState();
  const [Balance , SetBalance] = useState();
  const TheConfig = () => {
    const config = {
      networkId: "testnet",
      keyStore: (new keyStores.BrowserLocalStorageKeyStore()),
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
    };
    return config;
  }

  const ConnectWallet = async() => {
    const config = TheConfig();
    const near = await connect(config);
    const wallet = new WalletConnection(near); 
    wallet.requestSignIn("senpaitraxh.testnet");
  }

  const GetAddress = async() => { 
    const config = TheConfig();
    const near = await connect(config);
    const wallet = new WalletConnection(near);
    const walletAccountId = wallet.getAccountId();
    SetAccount(walletAccountId);
  }

  return (
    <div>
      <main>
        <button onClick={ConnectWallet}>Connect</button>
        <button onClick={GetAddress}>Get Account ID</button>
        <p>{Account}</p>
      </main>
    </div>
  )
}
