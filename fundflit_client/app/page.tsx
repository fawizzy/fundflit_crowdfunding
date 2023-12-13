"use client";
import { Hero } from "@/components";

import Image from "next/image";
import FAQs_Section from "@/components/FAQs_Section";
import Features from "@/components/Features";
import { useWeb5 } from "@/plugins/web5.client";
import { Dapp } from "@/components/Dapp";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Dapp />
      <Features />
      <FAQs_Section />
    </main>
  );
}
