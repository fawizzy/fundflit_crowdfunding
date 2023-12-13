import React from "react";

const Fundflit = () => {
  return (
    <div className="flex flex-col gap-4 mt-10 mx-10">
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">How do we work?</h2>
        <p>
          Fundflit give it's users the ability to create crofunding campaigns by
          leveraging Web 5 which means you are in control of your data. By
          utilizing a DID connected to an Ethereum account you are able to receive or give donations to other people's projects.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">What is a DID?</h2>
        <p>
          A DID (Decentralized Identifier) is a method of virtual identification
          that is unique to you, with your DID you can gather the data on the
          web5 nodes related to that DID.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Who can see my campaign?</h2>
        <p>
          The only people that can see your campaign are those who posses your
          DID or the link to your campaign. No one can access your campaign
          without this information, that includes us. With Web 5 you are truly
          in possession of your data.
        </p>
      </section>
    </div>
  );
};

export default Fundflit;
