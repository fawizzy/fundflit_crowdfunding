"use client";
import { readCampaigns } from "@/utils/web5.utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useWeb5 } from "@/plugins/web5.client";
import Spinner from "@/components/Spinner";
import GoalBar from "@/components/GoalBar";

const CampaignDetails = () => {
  const { web5, myDID } = useWeb5();
  const { did: decodedDid, campaignRecord } = useParams();
  const [campaign, setCampaign] = useState();

  const did = decodeURIComponent(decodedDid);
  const [progress, setProgress] = useState();

  //Since getting the specific campaign from web5 providing a record doesn't seem to work right now
  //I porvisionally fetch all campaigns and then filter the one with the record specified in the url
  useEffect(() => {
    const fetchCampaigns = async () => {
      if (web5) {
        const camp = await readCampaigns(did, web5);
        const chosenCamp = camp.filter(
          (campaign) => campaign.recordID === campaignRecord
        );
        setCampaign(chosenCamp[0].data);
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
      {web5 && campaign ? (
        <>
          {/* Title */}
          <header>
            <article>
              <h1>{campaign.campaign_name}</h1>
            </article>
          </header>

          {/* Body */}
          <section>
            <div
              className="h-[50%] w-auto bg-cover bg-center rounded-t-md"
              style={{ backgroundImage: `url(${campaign.imageUrl})` }}
            />
            <h2>{campaign.name} is organizing this fundraiser</h2>
            <p>{campaign.story}</p>
            <GoalBar progress={progress} />
            <div className="flex gap-1"><h2>{campaign.current_funds} ETH</h2><p>raised of {campaign.goal} ETH goal</p></div>
          </section>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CampaignDetails;
