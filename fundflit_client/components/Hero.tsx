import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container pt-[4rem] pb-[5rem] flex justify-start items-center flex-wrap">
      <div className="w-full lg:w-3/5  px-3 lg:px-20 m-auto">
        <h1 className="lg:text-[45px] font-[700] text-[33px] text-center lg:text-left leading-[125%]">
          We're a Web5 based Crowdfund Platform for Startups!
        </h1>
        <p className="text-[16px] px-4 lg:px-0 mt-6 py-5 text-gray-50 xl:max-w-[520px] text-center lg:text-left">
          Welcome to Fundflit — the future of startup funding. 🚀 Our
          decentralized platform harnesses the power of web5 technologies, to
          create a space where innovation meets opportunity. Join Us as We
          Redefine Community-Driven Fund with Trust and Transparency.
        </p>
        <div className="flex w-full gap-3 sm:flex-row lg:justify-start justify-center pt-10">
          <Link href="/campaigns">
            <Button
              type="button"
              title="Get Started Here!"
              variant="btn_green"
            />
          </Link>
          <Link href="/fundflit">
            <Button
              type="button"
              title="How we work?"
              icon="/assets/play.svg"
              variant="btn_white_text"
            />
          </Link>
        </div>
      </div>
      <div className="lg:w-2/5 lg:px-20 pt-[4.5rem] sm:flex-row m-auto hover:scale-100">
        <Image
          src="/assets/Group 216.png"
          alt="hero image"
          width={370}
          height={420}
        />
      </div>
    </section>
  );
};

export default Hero;
