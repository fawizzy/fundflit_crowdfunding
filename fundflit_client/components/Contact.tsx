import Button from "./Button"

const Contact = () => {
    return (
        <section className=" flex items-center justify-center w-full">
            <div className="relative overflow-hidden bg-[#0A2640] md:p-20 px-5 py-8 rounded-2xl md:w-[80%] w-[90%] text-center">
                <div className=" absolute md:w-[50rem] md:h-[50rem] w-[40rem] h-[42rem] rounded-full bg-[#1C3D5B] -top-[35rem] -right-[18rem]"></div>
                <div className="relative z-[1]">
                <h2 className=" lg:text-[3rem] md-text-[2.7rem] sm:text-[2.2rem] text-[1.3rem] text-gray-100">An enterprise template to ramp up your company website</h2>
                <div className="flex md:flex-row flex-col gap-5 md:mt-10 mt-8 justify-center">
                    <input type="text" placeholder="Your email address" className="rounded-full sm:text-lg text-base py-[.7rem] sm:px-[3.5rem] px-[1rem] sm:py-[1rem]" />
                    <button className="rounded-full sm:px-[3.5rem] px-[1rem] sm:py-[1rem] py-[.7rem] bg-green-50 sm:text-lg text-base transition-all hover:scale-95">Start now</button>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Contact