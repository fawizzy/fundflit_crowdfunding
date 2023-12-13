import Image from "next/image";

type FeaturesCardsProps = {
  imgURL: string;
  label: string;
  subtext: string;
};

const FeaturesCards = ({ imgURL, label, subtext }: FeaturesCardsProps) => {
  return (
    <div className="flex-1 sm:w-[250px] sm:min-w-[250px] w-[50%] rounded-[10px] shadow-3xl px-5 py-12 ransition-all hover:scale-105 border-b-4 border-transparent hover:border-green-500">
      <div className="w-11 h-11 flex justify-center items-center bg-green-600 rounded-full">
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-[16px] leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default FeaturesCards;
