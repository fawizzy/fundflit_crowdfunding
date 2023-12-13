"use client";
import { calcDaysLeft, readCampaignDetail } from "@/utils/web5.utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useWeb5 } from "@/plugins/web5.client";
import Spinner from "@/components/Spinner";
import GoalBar from "@/components/GoalBar";
import Campaign from "@/types/campaigns.type";
import MDEditor from "@uiw/react-md-editor";

const CampaignDetails = () => {
  const { web5 } = useWeb5();

  const { did, campaignRecord } = useParams();
  const [campaign, setCampaign] = useState<Campaign | null>(null);

  //Ensure did is string
  const stringDid = Array.isArray(did) ? did[0] : did;

  const decodedDid = decodeURIComponent(stringDid);
  const [progress, setProgress] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);

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
      setProgress(prog > 100 ? 100 : prog);
      setDaysLeft(calcDaysLeft(campaign.futureDate));
      // console.log(campaign);
    }
  }, [campaign]);

  return (
    <>
      {campaign !== null ? (
        <div className="flex flex-col gap-4 bg-gray-10 p-10 ">
          {/* Title */}
          <header className="w-full text-center">
            <article>
              <h1 className="text-2xl font-semibold">
                {campaign?.campaign_name}
              </h1>
            </article>
          </header>

          {/* Body */}
          <section className="flex w-full flex-col gap-2">
            <section className="flex flex-col md:flex-row gap-5">
              <div
                className="h-[300px] md:h-[400px] w-auto min-w-[65%] rounded-t-md bg-cover bg-center"
                style={{ backgroundImage: `url(${campaign?.imageUrl})` }}
              />

              <div className="flex w-full flex-col justify-between">
                <GoalBar progress={progress} />

                {/* Raised numbers */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl font-semibold text-green-50">
                    {campaign?.current_funds} ETH
                  </h2>
                  <p className="text-gray-500">
                    raised of {campaign?.goal} ETH goal
                  </p>
                </div>

                {/* Raised percentage */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl font-semibold text-black-100">
                    {progress.toFixed(2)}%
                  </h2>
                  <p className="text-gray-500">founded</p>
                </div>

                {/* Days left */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl font-semibold text-black-100">
                    {daysLeft}
                  </h2>
                  <p className="text-gray-500">days to go</p>
                </div>

                {/* Back this project button */}
                <button className="rounded-lg bg-green-50 py-4 text-xl font-medium text-white transition-all hover:scale-95 hover:bg-black-100">
                  Back this project
                </button>
              </div>
            </section>
            <div className="flex gap-1 pl-4">
              <h2 className="font-semibold">{campaign?.name} </h2>
              <p className="text-gray-500">is organizing this fundraiser</p>
            </div>

            {/* Story */}
            <div
              className="flex flex-col gap-2 rounded-lg bg-white p-4"
              data-color-mode="light"
            >
              <MDEditor.Markdown
                source={campaign?.story}
                style={{ whiteSpace: "pre-wrap" }}
              />
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
