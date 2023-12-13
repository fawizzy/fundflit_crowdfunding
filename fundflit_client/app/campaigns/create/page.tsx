"use client";

import Alert from "@/components/Alert";
import { useWeb5 } from "@/plugins/web5.client";
import Campaign from "@/types/campaigns.type";
import { createCampaign } from "@/utils/web5.utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { v4 as uuidv4 } from "uuid";

const CampaignCreate = () => {
  const { web5, myDID } = useWeb5();
  const [campaign, setCampaign] = useState<Campaign>();
  const router = useRouter();

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

  // const onSubmit = (data: any) => {
  //   const newData = { ...data, id: uuidv4(), current_funds: 0 };
  //   const recordID = createCampaign(newData, web5, myDID);
  //   router.push(`/campaigns/detail/${myDID}/${recordID}`);
  // };

  const onSubmit = async (data: any) => {
    const newData = { ...data, id: data.campaign_name, current_funds: 0 };
    try {
      const recordID = await createCampaign(newData, web5, myDID);
      router.push(`/campaigns/detail/${myDID}/${recordID}`);
    } catch (error) {
      // Handle error if createCampaign fails
      console.error("Error creating campaign:", error);
      // You might want to add error handling or feedback to the user here
    }
  };

  return (
    <>
      <header className="px-10 py-5 bg-[#FBF8F6] flex flex-col">
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
            <div className="flex flex-col">
              <label>Story*</label>
              <textarea
                rows={6}
                placeholder="Write your story"
                {...register("story", {
                  required: "The story field must be filled",
                  minLength: {
                    value: 3,
                    message: "The story should have at least 3 characters",
                  },
                  pattern: {
                    value: /^(?!\d+$).*/,
                    message: "A story cant be only a number",
                  },
                })}
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
              <label htmlFor="">Campaign image*</label>
              <input
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

            {/* Submit */}
            <button className="bg-green-50 hover:bg-black-100" type="submit">
              Submit new campaign
            </button>
          </form>
        </div>

        {Object.keys(errors).length > 0 && (
          <Alert severity="error" message={Object.values(errors)[0]?.message} />
        )}
      </section>
    </>
  );
};

export default CampaignCreate;
