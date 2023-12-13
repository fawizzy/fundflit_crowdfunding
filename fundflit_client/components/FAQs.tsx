"use client";

import { faqItems } from "@/constants";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const FAQs = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  //Put id type to any to avoid ts error
  const toggleAnswer = (id:any) => {
    setVisibleAnswer((prev) => {
      // If clicking on the same question, close it
      if (prev === id) {
        return null;
      }
      // If clicking on a different question, open it and close the previous one
      return id;
    });
  };

  return (
    <main className="sm:mt-[0] mt-[5rem] pb-[1rem] mb-[3rem] ">
      <h3 className="text-gray-90 text-[20px] font-bold mb-5 text-center lg:text-left">
        Frequently Asked Questions (FAQs)
      </h3>

      <div className="h-[24rem]">
        {faqItems.map((item) => (
          <div key={item.id}>
            <div
              className="bg-white flex items-center justify-between px-3 py-6 mb-[2px] rounded-md w-full cursor-pointer font-semibold"
              onClick={() => toggleAnswer(item.id)}
            >
              <span className="text-[1rem]">{item.question}</span>
              <IoIosArrowDropdown
                style={{
                  rotate: visibleAnswer === item.id ? "180deg" : "0deg",
                  transition: "rotate 0.3s ease-in-out",
                }}
              />
            </div>

            <div
              className="bg-transparent px-6 py-[3px] text-[.85rem] w-full pointer-events-none flex items-center "
              style={{
                opacity: visibleAnswer === item.id ? 1 : 0,
                height: visibleAnswer === item.id ? "5rem" : "0",
                transition: "opacity 0.2s ease-in-out, height 0.3s ease-in-out",
              }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FAQs;
