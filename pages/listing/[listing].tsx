import { useRouter } from "next/router";
import React from "react";

const ListingPage = () => {
  const router = useRouter();
  const { listingId } = router.query as { listingId: string };

  console.log(listingId);
  return <div></div>;
};

export default ListingPage;
