import About_Hero from "@/components/About_Hero";
import Contact from "@/components/Contact";
import Our_Mission from "@/components/Our_Mission";
import Our_Numbers from "@/components/Our_Numbers";
import Our_Story from "@/components/Our_Story";
import Our_Team from "@/components/Our_Team";
import Our_Values from "@/components/Our_Values";
import Vision from "@/components/Vision";

const About = () => {
  return (
    <main>
      <About_Hero/>
      <Our_Story/>
      <Our_Numbers/>
      <Our_Team/>
      <Our_Values/>
      <Our_Mission/>
      <Vision/>
      <Contact/>
    </main>
  );
};

export default About;
