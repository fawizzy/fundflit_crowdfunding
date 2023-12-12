"use client";

import { useWeb5 } from "@/plugins/web5.client";
import { readCampaigns, readPublicCampaigns } from "@/utils/web5.utils";
import { CampaignCard } from "@/components/CampaignCard";
import { useEffect, useState } from "react";
// import Spinner from "@/components/Spinner";
import { useForm } from "react-hook-form";
import Alert from "@/components/Alert";
import Link from "next/link";
import { configureProtocol } from "@/utils/web5.utils";
import Campaign from "@/types/campaigns.type";

const MyCampaigns = () => {
  const { web5, myDID } = useWeb5();
  const [campaigns, setCampaigns] = useState<
    { data: Campaign; recordID: string }[]
  >([]);
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors, isValid },
  //   } = useForm({ mode: "onSubmit" });
  const [web5Mounted, setWeb5Mounted] = useState(false);

  useEffect(() => {
    if (web5) {
      configureProtocol(web5, myDID);
      setWeb5Mounted(true);
    }
  }, [web5]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (web5Mounted) {
        try {
          const campaigns = await readCampaigns(myDID, web5);
          setCampaigns(campaigns);
        } catch (error) {
          // Handle errors if needed
          console.error("Error fetching campaigns:", error);
        }
      }
    };

    fetchCampaigns();
  }, [web5Mounted]);

  return (
    <>
      <header className="px-10 py-5 bg-[#FBF8F6]">
        <div className="flex justify-between flex-col gap-10">
          <section className="flex justify-between">
            <article className="w-full flex items-baseline text-4xl font-bold text-left">
              <h1>My Campaigns</h1>
            </article>
            <Link
              href={"/campaigns/create"}
              className="btn bg-green-50 hover:bg-black-100 whitespace-nowrap"
            >
              Create a campaign
            </Link>
          </section>
        </div>
      </header>

      <section className="h-full mt-4">
        {campaigns.length === 0 ? (
          <section className="text-3xl font-medium p-60 text-center">
            Couldn't find any campaigns
          </section>
        ) : (
          <section className="flex flex-col md:grid lg:grid-cols-4 md:grid-cols-3 gap-6 max-container padding-container">
            {campaigns.map((campaign) => (
              <div key={campaign.data.id}>
                {
                  <CampaignCard
                    campaign={campaign.data}
                    did={myDID}
                    record={campaign.recordID}
                  />
                }
              </div>
            ))}
          </section>
        )}
      </section>
    </>
  );
};

export default MyCampaigns;
