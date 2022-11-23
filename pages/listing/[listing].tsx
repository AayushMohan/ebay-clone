import { UserCircleIcon } from "@heroicons/react/24/outline";
import { MediaRenderer, useContract, useListing } from "@thirdweb-dev/react";
import { ListingType } from "@thirdweb-dev/sdk";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/Header";

const ListingPage = () => {
  const router = useRouter();
  const { listingId } = router.query as { listingId: string };

  const { contract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,
    "marketplace"
  );

  const { data: listing, isLoading, error } = useListing(contract, listingId);

  if (isLoading) {
    return (
      <div>
        <Header />
        <div className="text-center animate-pulse text-blue-500">
          <p>Loading Item....</p>
        </div>
      </div>
    );
  }

  if (!listing) {
    return <div>Listing Not Found</div>;
  }

  return (
    <div>
      <Header />

      <main className="max-w-6xl mx-auto p-2 flex flex-col lg:flex-row space-y-10 space-x-5 pr-10">
        <div className="p-10 border mx-auto lg:mx-0 max-w-md lg:max-w-xl">
          <MediaRenderer src={listing.asset.image} />
        </div>

        <section>
          <div>
            <h1 className="text-xl font-bold">{listing.asset.name}</h1>
            <p>{listing.asset.description}</p>
            <p className="flex items-center text-xs sm:text-base">
              <UserCircleIcon className="h-5" />
              <span className="font-bold pr-1">Seller: </span>
              {listing.sellerAddress}
            </p>
          </div>
          <div className="grid grid-cols-2 items-center py-2">
            <p className="font-bold ">Listing Type:</p>
            <p>
              {listing.type === ListingType.Direct
                ? "Direct Listing"
                : "Auction Listing"}
            </p>

            <p className="font-bold">Buy it Now Price:</p>
            <p>
              {listing.buyoutCurrencyValuePerToken.displayValue}
              {listing.buyoutCurrencyValuePerToken.symbol}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ListingPage;
