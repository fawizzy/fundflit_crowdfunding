import { features } from "@/constants";
import Image from "next/image";
import FeaturesCards from "./FeaturesCards";

const Features = () => {
  return (
    <section className="max-container">
      <h2 className="max-container lg:text-[37px] font-[700] text-[33px] px-[7rem] text-center lg:text-left">
        Our Amazing Features 😍
      </h2>
      <p className="text-[16px] px-6 lg:pl-[7rem] mb-6 py-3 text-gray-50 xl:max-w-[520px] text-center lg:text-left">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
        consequatur, quaerat sed nam pariatur unde!
      </p>
      <div className="flexBetween padding-container max-container flex flex-col pb-10">
        <div className="flexBetween flex-wrap gap-3">
          {features.map((feature) => (
            <FeaturesCards key={feature.label} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
