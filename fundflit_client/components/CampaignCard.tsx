import GoalBar from "./GoalBar";
import { useEffect, useState } from "react";

export const CampaignCard = ({ campaign, did, record }: any) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const prog = (campaign.current_funds / campaign.goal) * 100;
    setProgress(prog);
  }, [campaign.goal, campaign.current_funds]);

  const openLinkInNewTab = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(`/campaigns/detail/${did}/${record}`, "_blank");
  };

  return (
    <a
      href={`/campaigns/detail/${did}/${record}`}
      className="flex flex-col gap-2 bg-white rounded-md border-2 hover:scale-95 transition-transform"
      target="_blank"
      rel="noopener noreferrer"
      onClick={openLinkInNewTab}
    >
      <div
        className="h-[200px] w-auto bg-cover bg-center rounded-t-md"
        style={{ backgroundImage: `url(${campaign.imageUrl})` }}
      />

      <section className="p-3 flex flex-col gap-2">
        <article className="font-semibold whitespace-nowrap line-clamp-1">
          {campaign.campaign_name}
        </article>
        <h3>by {campaign.name}</h3>
        <div>
          <GoalBar progress={progress} />
          <h3>{`${campaign.current_funds} ETH pledged`}</h3>
          <h3>{`${progress}% funded`}</h3>
        </div>
      </section>
    </a>
  );
};
