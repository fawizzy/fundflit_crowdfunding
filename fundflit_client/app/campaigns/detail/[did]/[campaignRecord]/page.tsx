"use client";
import { readCampaignDetail } from "@/utils/web5.utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useWeb5 } from "@/plugins/web5.client";

const CampaignDetails = () => {
  const { web5 } = useWeb5();
  const { did, campaignRecord } = useParams();
  const [campaign, setCampaign] = useState();

  useEffect(() => {
    if (web5) {
      const camp = readCampaignDetail(did, web5, campaignRecord);
      setCampaign(camp);
    }
  }, [web5]);

  useEffect(() => {
    console.log(did)
    console.log(campaign);
  }, [campaign]);

  return (
    <div>
      <p>did: {did}</p>
      <p>record: {campaignRecord}</p>
    </div>
  );
};

export default CampaignDetails;
