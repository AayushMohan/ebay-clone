import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

type Props = {};

const Header = (props: Props) => {
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();

  return (
    <div>
      <nav>
        <div>
          {address ? (
            <button onClick={disconnect} className="connectWalletBtn">
              Hi, {address}
            </button>
          ) : (
            <button onClick={connectWithMetamask} className="connectWalletBtn">
              Connect your wallet
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
