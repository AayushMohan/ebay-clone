import { MediaRenderer, useContract, useListing } from "@thirdweb-dev/react";
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

  if (!listing) {
    return <div>Listing Not Found</div>;
  }

  return (
    <div>
      <Header />

      <main>
        <div>
          <MediaRenderer src={listing?.asset.image} />
        </div>
      </main>
    </div>
  );
};

export default ListingPage;
