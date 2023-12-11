const About_Hero = () => {

    const style = "flex flex-col justify-between xl:w-[18.75rem] lg:w-[16.75rem] sm:w-[14rem] w-[45%] h-full";
    const imgStyle = "lg:h-[18rem] sm:h-[14rem] h-[11rem] rounded-3xl object-cover"

    return (
        <section className="flex flex-col justify-center items-center">
            <div className="lg:px-24 md:px-14 px-5 bg-[#0A2640] lg:h-[765px] md:h-[665px] sm:h-[565px] h-[465px] w-full text-center flex flex-col justify-center items-center">
                <h2 className=" lg:text-[4rem] md:text-[3rem] sm:text-[2.6rem] text-[1.7rem] text-gray-100">
                    We love to make great things, things that matter.
                </h2>
                <p className=" md:text-base sm:text-sm text-[12px] text-gray-200 mt-5 sm:w-[80%] w-[90%] md:leading-8 leading-5">
                    Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
                </p>
            </div>
            <div className=" xl:px-24 lg:px-18 md:px-14 px-5 relative md:-top-[9rem] -top-[5rem] flex gap-6 items-center justify-center lg:h-[39.5rem] sm:h-[30.5rem] h-[23.5rem] ">
                <div className={style}>
                    <img src="/assets/about-img1.jpeg" alt="" className={imgStyle} />
                    <img src="/assets/about-img4.png" alt="" className={imgStyle} />
                </div>
                <div className=" h-full xl:w-[25rem] lg:w-[22rem] md:w-[20rem] md:block hidden">
                    <img src="/assets/about-img2.jpeg" alt="" className="h-full w-full rounded-3xl object-cover" />
                </div>
                <div className={style}>
                    <img src="/assets/about-img3.png" alt="" className={imgStyle} />
                    <img src="/assets/about-img5.jpeg" alt="" className={imgStyle} />
                </div>
            </div>
        </section>
    )
}

export default About_Hero