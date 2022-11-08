import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();

  return (
    <div>
      <nav className="flex justify-between">
        <div className="flex items-center text-sm space-x-2">
          {address ? (
            <button onClick={disconnect} className="connectWalletBtn">
              Hi, {address.slice(0, 4) + "..." + address.slice(-4)}
            </button>
          ) : (
            <button onClick={connectWithMetamask} className="connectWalletBtn">
              Connect your wallet
            </button>
          )}

          <p className="hidden md:inline-flex cursor-pointer">Daily Dose</p>
          <p className="hidden md:inline-flex cursor-pointer">Help & Contact</p>
        </div>

        <div className="flex items-center space-x-4 text-sm">
          <p className="hidden md:inline-flex cursor-pointer">Ship to</p>
          <p className="hidden md:inline-flex cursor-pointer">Sell</p>
          <p className="hidden md:inline-flex cursor-pointer">Watchlist</p>

          <Link href="/addItem">Add to Inventory</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
