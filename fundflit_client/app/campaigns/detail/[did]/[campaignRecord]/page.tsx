"use client";
import { readCampaignDetail } from "@/utils/web5.utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useWeb5 } from "@/plugins/web5.client";
import Spinner from "@/components/Spinner";
import GoalBar from "@/components/GoalBar";
import Campaign from "@/types/campaigns.type";

const CampaignDetails = () => {
  const { web5 } = useWeb5();
  const { did, campaignRecord } = useParams();
  const [campaign, setCampaign] = useState<Campaign>();

  //Ensure did is string
  const stringDid = Array.isArray(did) ? did[0] : did;

  const decodedDid = decodeURIComponent(stringDid);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (web5) {
        const camp = await readCampaignDetail(decodedDid, web5, campaignRecord);
        setCampaign(camp);
      }
    };

    fetchCampaigns();
  }, [web5]);

  useEffect(() => {
    if (campaign) {
      const prog = (campaign.current_funds / campaign.goal) * 100;
      setProgress(prog);
    }
  }, [campaign]);

  return (
    <>
      {campaign !== null ? (
        <div className="mx-10 gap-4 flex flex-col overflow-hidden h-screen mt-10">
          {/* Title */}
          <header className="w-full">
            <article>
              <h1 className="text-2xl font-semibold">
                {campaign?.campaign_name}
              </h1>
            </article>
          </header>

          {/* Body */}
          <section className="flex flex-col gap-2 w-full">
            <div
              className="h-[500px] w-auto bg-cover bg-center rounded-t-md"
              style={{ backgroundImage: `url(${campaign?.imageUrl})` }}
            />
            <div className="flex gap-1">
              <h2 className="font-semibold">{campaign?.name} </h2>
              <p className="text-gray-500">is organizing this fundraiser</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Story</h2>
              <p>{campaign?.story}</p>
            </div>

            <GoalBar progress={progress} />
            <div className="flex gap-1">
              <h2>{campaign?.current_funds} ETH</h2>
              <p className="text-gray-500">
                raised of {campaign?.goal} ETH goal
              </p>
            </div>
          </section>
        </div>
      ) : (
        <div className="h-screen">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default CampaignDetails;
