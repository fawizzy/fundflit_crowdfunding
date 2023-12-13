"use client";

import Alert from "@/components/Alert";
import { useWeb5 } from "@/plugins/web5.client";
import Campaign from "@/types/campaigns.type";
import { createCampaign, savePublicCampaign } from "@/utils/web5.utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import MDEditor, { MDEditorProps } from "@uiw/react-md-editor";

const CampaignCreate = () => {
  const { web5, myDID } = useWeb5();
  const [campaign, setCampaign] = useState<Campaign>();
  const router = useRouter();

  const [story, setStory] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });


  const isFutureDate = (selectedDate: Date) => {
    const currentDate = new Date();
    const inputDate = new Date(selectedDate);
    return inputDate > currentDate;
  };

  const onSubmit = async (data: any) => {
    data.current_funds = 0;
    data.story = story;
    console.log(data.public);

    try {
      const recordID = await createCampaign(data, web5, myDID);
      if (data.public) {
        savePublicCampaign(myDID, recordID);
      }
      router.push(`/campaigns/detail/${myDID}/${await recordID}`);
      // createCampExamples();
    } catch (error) {
      // Handle error if createCampaign fails
      console.error("Error creating campaign:", error);
    }
  };

  //   const createCampExamples = async () => {
  //     const camps = [
  //       {
  //         campaign_name:
  //           "CleanSeas: A Call to Clean Our Oceans with Autonomous Drones",
  //         current_funds: 476000.78,
  //         futureDate: "2044-12-01",
  //         goal: 500000,
  //         id: "52224176-c045-4007-b325-1aea0a7051d3",
  //         imageUrl: "https://i.imgur.com/4CMqXjn.jpeg",
  //         name: "Franco Aguirre",
  //         public: true,
  //         story: `🌊 At CleanSeas, we're deeply committed to tackling the grave issue of ocean pollution head-on. Our solution? Deploying cutting-edge autonomous drones equipped with state-of-the-art cleaning technology to rid our seas of harmful marine debris.

  // ## Why CleanSeas?

  // 🤖 **Autonomous Technology:** Our drones are designed to autonomously navigate and collect marine debris, ensuring efficient and widespread cleaning of our oceans.

  // 🌏 **Environmental Impact:** By removing harmful waste from our seas, we're safeguarding marine life and preserving delicate ecosystems for future generations.

  // 🌟 **Global Initiative:** CleanSeas is more than a project; it's a collective effort to restore the health of our oceans and make a lasting positive impact on our planet.

  // ## The Impact

  // Picture a world where our oceans gleam with purity, where marine life thrives in a pollution-free habitat. CleanSeas strives to make this vision a reality by systematically eradicating the debris that plagues our waters, creating healthier ecosystems for countless species.

  // ## Funding Goal

  // To launch this crucial initiative, we aim to raise 500.000 ETH. This funding will facilitate the development of more efficient drone models, the expansion of our cleaning operations to key oceanic regions, and the implementation of robust monitoring systems.

  // Join us in our mission to clean and protect our oceans. Every contribution brings us closer to a future where marine life flourishes in pristine waters.

  // Together, let's make our oceans cleaner and healthier for generations to come. Support CleanSeas today!`,
  //       }
  //     ];

  //   camps.forEach(async (campaign) => {
  //     const recordID = await createCampaign(campaign, web5, myDID);
  //     savePublicCampaign(myDID, recordID);
  //   });
  // };

  useEffect(()=> {console.log(story)},[story])

  return (
    <>
      <header className="px-10 py-5 bg-gray-10 flex flex-col">
        <div className="flex justify-between flex-col gap-10">
          <section className="flex justify-between">
            <article className="w-full flex items-baseline text-4xl font-bold text-left">
              <h1>Create your own campaign</h1>
            </article>
          </section>
          <Link
            href={"/campaigns"}
            className="bg-green-50 hover:bg-black-100 btn self-start"
          >
            {"< Go back to campaigns"}
          </Link>
        </div>
      </header>
      <section className="h-full mt-4 mx-10">
        <div>
          <form
            id="campaign"
            className="form "
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name */}
            <div>
              <label>Name*</label>
              <input
                className="w-full"
                type="text"
                placeholder="John Doe"
                {...register("name", {
                  required: "The name field must be filled",
                  minLength: {
                    value: 3,
                    message: "The name should have at least 3 characters",
                  },
                  pattern: {
                    value: /^(?!\d+$).*/,
                    message: "A name cant be only a number",
                  },
                })}
              />
            </div>

            {/* Campaign name */}
            <div>
              <label>Campaign name*</label>
              <input
                className="w-full"
                type="text"
                placeholder="Write a tilte"
                {...register("campaign_name", {
                  required: "The campaign name field must be filled",
                  minLength: {
                    value: 3,
                    message:
                      "The campaign name should have at least 3 characters",
                  },
                  pattern: {
                    value: /^(?!\d+$).*/,
                    message: "A campaign name cant be only a number",
                  },
                })}
              />
            </div>

            {/* Story */}
            <div data-color-mode="light">
              <label>Campaign story</label>
              <MDEditor
                textareaProps={{ placeholder: "Write your story" }}
                value={story}
                onChange={setStory as MDEditorProps['onChange']}
              />
            </div>

            {/* Goal */}
            <div>
              <label>
                Goal(
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hyper underline"
                  href="https://coinmarketcap.com/currencies/ethereum/"
                >
                  ETH
                </a>
                )*
              </label>
              <input
                className="w-full"
                inputMode="numeric"
                placeholder="0.50"
                {...register("goal", {
                  required: "The goal field must be filled",
                  pattern: {
                    value: /^\d+(\.\d+)?$/,
                    message: "Please enter a valid goal number",
                  },
                })}
              />
            </div>

            {/* End Date */}
            <div>
              <label>End date*</label>
              <input
                className="w-full"
                type="date"
                {...register("futureDate", {
                  required: "The end date field must be filled",
                  validate: {
                    futureDate: (value) =>
                      isFutureDate(value) || "Please select a future date",
                  },
                })}
              />
            </div>

            {/* Campaign image */}
            <div>
              <label>Campaign image*</label>
              <input
                className="w-full"
                type="url"
                placeholder="Place image URL of your campaign"
                {...register("imageUrl", {
                  required: "The campaign image field must be filled",
                  pattern: {
                    value: /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i,
                    message:
                      "Please enter a valid image URL (png, jpg, jpeg, gif)",
                  },
                })}
              />
            </div>

            {/* Is the campaign public? */}

            <div className="flex flex-col justify-start items-start gap-1">
              <label>Is this campaign public?</label>
              <input
                className="scale-150 ml-1"
                type="checkbox"
                {...register("public")}
              />
            </div>

            {/* Submit */}
            <button className="bg-green-50 hover:bg-black-100" type="submit">
              Submit new campaign
            </button>
          </form>
        </div>

        {Object.keys(errors).length > 0 && (
          <Alert
            severity="error"
            message={String(Object.values(errors)[0]?.message)}
          />
        )}
      </section>
    </>
  );
};

export default CampaignCreate;
