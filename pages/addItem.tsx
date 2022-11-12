import React from "react";
import Header from "../components/Header";
import { useAddress, useContract } from "@thirdweb-dev/react";

type Props = {};

const addItems = (props: Props) => {
  const address = useAddress();
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_COLLECTION_CONTRACT,
    "nft-collection"
  );
  console.log(contract);

  return (
    <div>
      <Header />

      <main>
        <h1>Add an Item to the marketplace</h1>
        <h2>Items Details</h2>
      </main>
    </div>
  );
};

export default addItems;
