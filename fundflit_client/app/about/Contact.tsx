import Button from "../../components/Button"

const Contact = () => {
    return (
        <section className=" flex items-center justify-center w-full">
            <div className="relative overflow-hidden bg-[#0A2640] md:p-20 p-8 rounded-2xl md:w-[80%] w-[90%] text-center">
                <div className=" absolute md:w-[50rem] md:h-[50rem] w-[40rem] h-[42rem] rounded-full bg-[#1C3D5B] -top-[35rem] -right-[18rem]"></div>
                <div className="relative z-[1]">
                <h2 className=" lg:text-[3rem] md-text-[2.7rem] sm:text-[2.2rem] text-[1.3rem] text-gray-100">An enterprise template to ramp up your company website</h2>
                <div className="flex md:flex-row flex-col gap-5 md:mt-10 mt-8 justify-center">
                    <input type="text" placeholder="Your email address" className="rounded-md lg:w-[60%] sm:text-lg text-base py-[.9rem] sm:px-[1.5rem] px-[1rem] sm:py-[1rem] active:outline-none" />
                    <Button type="submit" title="Start now" variant="btn_green" />
                </div>
                </div>
            </div>
        </section>
    )
}

export default Contact