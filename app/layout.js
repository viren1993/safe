"use client"
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import {
  metamaskWallet,
  walletConnect,
  trustWallet,
} from "@thirdweb-dev/react";
import { ThirdwebProvider } from "./components/ThirdwebProvider";
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      <body className={`${jakarta.className} flex min-h-full flex-col`}>
        <ThirdwebProvider supportedWallets={[
          metamaskWallet(),
          walletConnect(),
          trustWallet(),
        ]}
          activeChain="mumbai" clientId="236a1a86c9c96ae3cd24222c2739d141">
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  )
}
