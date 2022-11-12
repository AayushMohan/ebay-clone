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

      <main>Add an Item to the marketplace</main>
    </div>
  );
};

export default addItems;
