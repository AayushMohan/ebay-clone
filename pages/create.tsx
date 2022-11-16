import React from "react";
import Header from "../components/Header";
import { useAddress, useContract } from "@thirdweb-dev/react";

type Props = {};

const Create = (props: Props) => {
  const address = useAddress();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Create;
