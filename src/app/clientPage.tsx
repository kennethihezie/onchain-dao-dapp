'use client'

import { ReactNode } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains([sepolia], [publicProvider()]);
const { connectors } = getDefaultWallets({
  appName: "CryptoDevs DAO",
  projectId: 'ddddb30a39bd07de0b087e0247ff46c3', // "ADD_YOUR_PROJECT_ID_HERE"
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export const ClientPage = ({children}: {children: ReactNode}) => {
  return (
    <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
             {children}
          </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default ClientPage