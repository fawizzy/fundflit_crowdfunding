import { Hero } from "@/components";
import Image from "next/image";
import FAQs_Section from "@/components/FAQs_Section";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <FAQs_Section />
    </main>
  );
}
