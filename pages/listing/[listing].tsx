import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/Header";

const ListingPage = () => {
  const router = useRouter();
  const { listingId } = router.query as { listingId: string };

  console.log(listingId);
  return (
    <div>
      <Header />
    </div>
  );
};

export default ListingPage;
