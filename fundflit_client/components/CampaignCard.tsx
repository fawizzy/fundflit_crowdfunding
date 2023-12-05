"use client";

import Campaign from "@/types/campaigns.type";
import GoalBar from "./GoalBar";
import { useEffect, useState } from "react";
import Link from "next/link";

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const [progress, setProgress] = useState(0);
  // console.log(campaign);
  useEffect(() => {
    const prog = (campaign.current_funds / campaign.goal) * 100;
    setProgress(prog);
  }, [campaign.goal, campaign.current_funds]);

  return (
    <Link href={`/campaigns/detail`} className="flex flex-col gap-2 bg-white rounded-md border-2 hover:scale-95 transition-transform">
      <div
        className="h-[200px] w-auto bg-cover bg-center rounded-t-md"
        style={{ backgroundImage: `url("/assets/img-1.png")` }}
      />
      <section className="p-3 flex flex-col gap-2">
        <article className="font-semibold">{campaign.campaign_name}</article>
        <h3>by {campaign.name}</h3>
        <div>
          <GoalBar progress={progress} />
          <h3>{`${campaign.current_funds} ETH pledged`}</h3>
          <h3>{`${progress}% funded`}</h3>
        </div>
      </section>
    </Link>
  );
};

{
  /* <div className="min-h-[200px] w-auto" style={{ backgroundImage: `url(${campaign.campaign_image})` }} /> */
}
