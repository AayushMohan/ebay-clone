import React, { FormEvent, useState } from "react";
import Header from "../components/Header";
import { useAddress, useContract } from "@thirdweb-dev/react";
import { URL } from "url";
import { useRouter } from "next/router";

type Props = {};

const addItems = (props: Props) => {
  const address = useAddress();
  const router = useRouter();
  const [preview, setPreview] = useState<string>();
  const [image, setImage] = useState<string>();

  const { contract } = useContract(
    process.env.NEXT_PUBLIC_COLLECTION_CONTRACT,
    "nft-collection"
  );
  console.log(contract);

  const mintNFT = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contract || !address) return;

    if (!image) {
      alert("Please select an image");
      return;
    }

    const target = e.target as typeof e.target & {
      name: { value: string };
      description: { value: string };
    };

    const metadata = {
      name: target.name.value,
      description: target.description.value,
      image: image, //Image URL or File
    };

    try {
      const tx = await contract.mintTo(address, metadata);
      const receipt = tx.receipt; //The transaction receipt
      const tokenId = tx.id; //The ID of the NFT Minted
      const nft = await tx.data(); //Optional fetch details of minted NFT

      console.log(receipt, tokenId, nft);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

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

        <div className="flex flex-col justify-center items-center md:flex-row md:space-x-5 pt-5">
          <img
            className="border h-80 w-80 object-contain"
            src={preview || "https://links.papareact.com/ucj"}
            alt=""
          />

          <form
            className="flex flex-col flex-1 p-2 space-y-2"
            onSubmit={mintNFT}
          >
            <label className="font-light">Name of Item</label>
            <input
              className="formField"
              placeholder="Name of item..."
              type="text"
              name="name"
              id="name"
            />

            <label className="font-light">Description</label>
            <input
              className="formField"
              placeholder="Enter Description..."
              type="text"
              name="description"
              id="description"
            />

            <label className="font-light">Image of the Item</label>
            <input
              type="file"
              onChange={(target: any) => {
                if (target.files?.[0]) {
                  setPreview(URL.createObjectURL(target.files[0]));
                  setImage(target.files[0]);
                }
              }}
            />

            <button
              type="submit"
              className="bg-blue-600 font-bold text-white rounded-full py-4 px-10 w-56 md:mt-auto mx-auto mt-5 md:ml-auto"
            >
              Add/Mint Item
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default addItems;
