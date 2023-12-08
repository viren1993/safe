"use client";

import Link from "next/link";
import Header from "./components/header";
import { ThirdwebProvider } from "./components/ThirdwebProvider";

import {
  metamaskWallet,
  walletConnect,
  trustWallet,
} from "@thirdweb-dev/react";

export default function Home() {
  return (
    <>
      {/* <ThirdwebProvider supportedWallets={[
          metamaskWallet(),
          walletConnect(),
          trustWallet(),
        ]}
        activeChain="mumbai" clientId="236a1a86c9c96ae3cd24222c2739d141"> */}
        <Header />
        {/* <div className="border circle rounded-full" /> */}
        <div className="mx-auto py-[100px] lg:py-20 relative hero-section-bg">
          <div className="md:mb-8 mb-4 flex justify-center">
            <span className="font-medium items-center border-1 tracking-normal border-[#363637] bg-[#191028] rounded-full px-6 py-2 text-xs md:text-base">
              Start your SAFE journey on polygon
            </span>
          </div>
          <h1 className="md:text-[80px] text-4xl font-extrabold	text-center mb-8 sm:leading-[50px] md:leading-[90px] md:mb-[28px]">
            Start your <span className="heading-color">SAFE</span>
            <br /> investment with us
          </h1>
          <h4 className="text-sm md:text-2xl text-center mb-[38px]">
            The first decentralised SAFE platform on polygon <br /> layer-2
            network for your investments
          </h4>
          <div className="flex flex-wrap justify-center">
            <Link
              href="./safe"
              className="inline-flex cursor-pointer font-medium items-center wallet-button justify-center transition duration-200 active:scale-90 border border-1 bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 ml-5 rounded-full px-6 py-2 text-sm capitalize md:text-base 4xl:px-8 4xl:py-2.5"
            >
              Create SAFE
            </Link>
            <button
              type="button"
              className="inline-flex font-medium items-center wallet-button justify-center transition duration-200 active:scale-90 border border-1 bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 ml-5 rounded-full px-6 py-2 text-sm capitalize md:text-base 4xl:px-8 4xl:py-2.5"
            >
              Dashboard
            </button>
          </div>
        </div>
      {/* </ThirdwebProvider> */}
    </>
  );
}
