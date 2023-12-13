import { contactItems } from "@/constants";
import Form from "./Form";
import Link from "next/link";

const Contact = () => {
  return <div className="max-container ">
    <div className="md:h-[350px] h-[350px] font-medium xl-[3rem] md-[2.2rem] text-[1.5rem] md:p-20 p-6 flexCenter text-center">
      Lorem, ipsum d, dolorem? Accusantium quasi recusandae explicabo, ut quis beatae soluta amet possimus cupiditate tempora!
    </div>
    <div className="flexCenter md:flex-row flex-col bg-[#0A2640] md:gap-10 gap-10 md:p-20 px-7 py-20">
      <div className="md:w-[50%] w-full text-white">
        <h2 className=" font-bold md:text-[3rem] text-[2rem]">Get a quote</h2>
        <p className=" text-gray-20 w-[80%]">Fill up the form and our team will get back to you within 24 hours.</p>
        <div className="md:my-28 mt-10 mb-5">
          {contactItems.direct.map((item, index) => (
            <div key={index} className="flexStart rounded-md border-2 border-transparent hover:border-green-50 hover:bg-[#0d3052] w-fit cursor pointer p-3 transition-all">
              <item.imgUrl className=" text-green-50 mr-3"/>
              <span>{item.info}</span>
            </div>
          ))}
        </div>
        <div className="flexStart">
            {contactItems.socilaMedia.map((item, index) => (
              <div key={index} className=" hover:bg-green-50 rounded-full flexCenter w-10 h-10 cursor-pointer mr-5 transition-all ">
               
               <Link href={item.link}><item.imgUrl size={20}/></Link> 
              </div>
            ))}
          </div>
      </div>
    <Form/>
    </div>
  </div>;
};

export default Contact;
