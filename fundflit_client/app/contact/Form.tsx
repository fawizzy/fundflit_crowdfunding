"use client"

import { useState, useEffect } from "react";
import { inputItems } from "@/constants";
import Image from "next/image";
import Button from "@/components/Button";
import Alert from "@/components/Alert";

const Form = () => {

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: string) => {
        setFormValues((prev) => ({ ...prev, [value]: e.target.value }));
    };

    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false);
    
    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationMsg: any = {};
    
        // Validation for name field
        if (!formValues.name.trim()) {
          validationMsg.name = 'Please enter your name';
        } else if (formValues.name.length < 3) {
          validationMsg.name = 'Your name cannot be less than 3 letters';
        }
    
        // Validation for email field
        if (!formValues.email.trim()) {
          validationMsg.email = 'Provide your email address';
        } else if (!inputItems[1].pattern.test(formValues.email)) {
          validationMsg.email = 'Invalid email address';
        }
    
        // Validation for message field
        if (!formValues.message.trim()) {
          validationMsg.message = 'Please enter your message';
        }
    
        // Set validation errors
        setError(validationMsg);
    
        // send message and clear input areas when no errors are found
        if (Object.keys(validationMsg).length === 0) {
            setSuccess(true);
          setFormValues(() => ({  name: "",
          email: "",
          message: "" }));
        }
        setTimeout(() => setSuccess(false), 3000)
      };

    return (
        <main className=" bg-[#fafbfd] rounded-3xl p-10 md:w-[50%] w-full">
            <form action="" noValidate onSubmit={sendMessage}>
            {success && <Alert message="Message received" severity="success" />}
                {inputItems.map((item) => (
                    <div key={item.id} className="mb-5">
                        <label htmlFor={item.id} >
                            {item.label}
                            <div className="flexCenter bg-white px-1 py-4 rounded-xl mt-2 cursor-pointer border border-green-90 hover:border-green-50 focus-within:border-green-50">
                                <Image
                                    src={item.imgUrl}
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="relative -top-[1px]" />
                                <input
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    value={formValues[item.id]}
                                    onChange={(e) => handleChange(e, item.id)}
                                    className="ml-2 w-[90%] bg-transparent focus:outline-none" />
                            </div>
                        </label>
                        <small className={`transition-all text-red-600 ${error[item.id] ? 'opacity-100' : 'opacity-0'}`}>{error[item.id]}</small>
                    </div>
                ))}
                <div>
                    <label>
                        Message
                        <textarea name="" 
                        placeholder="Enter your message..." 
                        value={formValues.message}
                        onChange={(e) => handleChange(e, 'message')}
                        className=" mt-2 rounded-xl focus:outline-none border border-green-90 hover:border-green-50 focus:border-green-50 h-[10rem]"></textarea>
                    </label>
                    <small className={`transition-all text-red-600 ${error.message ? 'opacity-100' : 'opacity-0'}`}>{error.message}</small>
                </div>
                <div className="flexEnd mt-5">
                    <button type="submit" >Send Message</button>
                    <Button type="submit" title="Submit Form" variant="btn_dark_green" />
                </div>
            </form>
        </main>
    )
}

export default Form