"use client";

import { faqItems } from "@/constants";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const FAQs = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (id) => {
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
    <main className="sm:mt-[0] mt-[5rem]">
      <h3 className="text-gray-90 text-xl font-bold mb-8">
        Frequently Asked Questions
      </h3>

      <div className="h-[24rem]">
        {faqItems.map((item) => (
          <div key={item.id}>
            <div
              className="bg-white flex items-center justify-between px-3 py-6 mb-[1px] rounded-md w-full cursor-pointer font-semibold"
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
              className="bg-transparent px-6 py-[3px] text-[1rem] w-full pointer-events-none flex items-center "
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
