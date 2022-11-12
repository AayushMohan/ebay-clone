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

      <main className="max-w-6xl mx-auto p-10 border">
        <h1 className="text-4xl font-bold">Add an Item to the marketplace</h1>
        <h2 className="text-xl font-semibold pt-5">Items Details</h2>

        <p className="pb-5">
          By adding an item to the marketplace, you're essentially Minting an
          NFT of the item into your wallet which we can then list for sale!
        </p>

        <div className="flex flex-col justify-center md:flex-row">
          <img
            className="border h-80 w-80 object-contain"
            src="https://links.papareact.com/ucj"
            alt=""
          />

          <form className="flex flex-col flex-1 p-2 space-y-2">
            <label className="font-light">Name of Item</label>
            <input
              className="formField"
              placeholder="Name of item..."
              type="text"
            />

            <label className="font-light">Description</label>
            <input
              className="formField"
              placeholder="Enter Description..."
              type="text"
            />

            <label className="font-light">Image of the Item</label>
            <input type="file" />

            <button>Add/Mint Item</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default addItems;
