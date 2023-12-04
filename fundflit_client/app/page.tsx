import { Hero } from "@/components";
import Image from "next/image";
import FAQs_Section from "@/components/FAQs_Section";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      {/* Frequently asked questions section */}
      <FAQs_Section />
    </main>
  );
}
