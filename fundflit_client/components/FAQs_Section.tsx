import Link from "next/link";
import FAQs from "./FAQs";
import { CgMenuLeft } from "react-icons/cg";
import { appImages } from "@/constants";

const FAQs_Section = () => {
  return (
    <main className="padding-container max-container flex flex-col py-[5rem]">
      <h2 className=" lg:text-[40px] font-[700] text-[30px] text-center lg:text-left py-[2.5rem] lg:pl-[2rem]">
        We Ensure <span className=" text-green-50"> Security</span>,{" "}
        <span className=" text-green-50">Trust</span>, <br />
        and <span className=" text-green-50">Transparency</span>.
      </h2>

      <div className="flex sm:flex-row flex-col justify-between w-full">
        <div className="relative flex flex-col justify-center sm:w-[45%] w-full">
          <div className="w-[9.93rem] h-[40rem] bg-Green"></div>

          <div className="absolute left-10 bg-white pl-4 py-4 rounded-xl w-[17.56rem] h-[35.95rem] shadow-green-100 shadow-xl hover:shadow-transparent">
            <div className="flex justify-between items-center pr-4">
              <span className="text-green-50 font-bold text-sm">
                <span className="text-black">Fund</span>flit.
              </span>
              <CgMenuLeft className=" text-green-50" size={20} />
            </div>

            <div className="flex justify-between mt-6">
              {appImages.map((item) => (
                <div key={item.id} className="w-[5.2rem]">
                  <img
                    src={item.image}
                    alt="Black people"
                    className="w-full h-[5rem] object-cover rounded"
                  />
                  <p className=" text-[.5rem] mt-1">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-50 text-[12px] mt-[2rem]">
              Decentralized Identity
            </p>

            <ul className=" flex flex-wrap gap-1 w-[50%] mt-[1rem] items-center">
              <li className="w-[.699rem] h-[.75rem] bg-[#F86799]"></li>
              <li className="w-[80%] h-[.625rem] bg-zinc-200"></li>
              <li className="w-[.699rem] h-[.75rem] bg-green-50"></li>
              <li className="w-[80%] h-[.625rem] bg-zinc-200"></li>
              <li className="w-[.699rem] h-[.75rem] bg-[#70AAFB]"></li>
              <li className="w-[65%] h-[.625rem] bg-zinc-200"></li>
            </ul>

            <div className="relative -top-10">
              <img src="/assets/chart.svg" alt="chart" />
            </div>

            <p className="text-gray-50 text-[12px] flex justify-between items-center font-medium mr-4 relative -top-8">
              Invest for the Future!
            </p>

            <ul className="flex flex-wrap w-full justify-between pr-4">
              <li className="w-[47%] h-[1.0625rem] bg-zinc-100 mb-2"></li>
              <li className="w-[47%] h-[1.0625rem] bg-zinc-100 mb-2"></li>
              <li className="w-[47%] h-[1.0625rem] bg-zinc-100 mb-2"></li>
              <li className="w-[47%] h-[1.0625rem] bg-zinc-100 mb-2"></li>
              <li className="w-[47%] h-[1.0625rem] bg-zinc-100 mb-2"></li>
              <li className="w-[47%] h-[1.0625rem] bg-zinc-100 mb-2"></li>
            </ul>
          </div>
        </div>

        <div className="sm:w-[55%] w-full flex flex-col justify-between sm:mt-[0] mt-[6rem] m-auto">
          <p className="w-full text-center lg:text-left py-10 pr-5">
            Open Data is the idea that some data should be freely available for
            everyone to use and republish as they see fit, without restrictions
            from copyright, patents, or other control mechanisms.
          </p>

          <FAQs />
        </div>
      </div>
    </main>
  );
};

export default FAQs_Section;
