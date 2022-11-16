import React from "react";
import Header from "../components/Header";
import {
  useAddress,
  useContract,
  MediaRenderer,
  useNetwork,
  useNetworkMismatch,
  useOwnedNFTs,
  useCreateAuctionListing,
  useCreateDirectListing,
} from "@thirdweb-dev/react";

type Props = {};

const Create = (props: Props) => {
  const address = useAddress();
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,
    "marketplace"
  );

  return (
    <div>
      <Header />

      <main className="max-w-6xl mx-auto p-10 pt-2">
        <h1>List an Item</h1>
        <h2>Select an Item you would like to Sell!</h2>

        <hr />

        <p>Below you will find the NFT's you own in your wallet</p>
      </main>
    </div>
  );
};

export default Create;
