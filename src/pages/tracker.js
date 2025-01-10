import Image from "next/image";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { useRef } from "react";
import TrackerCategories from "@/components/tracker-categories";
import TrackerUsers from "@/components/tracker-users";

export default function CreateAgent() {
    const closeModalButton = useRef(null)
    const modal = useRef(null)

    const fuel = useRef(null)
    const block = useRef(null)

    const fuelClick = () => {
        fuel.current.style.backgroundColor = '#1784E2'
        block.current.style.backgroundColor = 'transparent'
    }

    const blockClick = () => {
        fuel.current.style.backgroundColor = 'transparent'
        block.current.style.backgroundColor = '#fff'
    }

    return (
    <>  
        <div className="create-agent bg-contain bg-top bg-no-repeat relative md:bg-none mb-24">
            <Image src="/images/Group 48096087.png" className="absolute -bottom-12 left-0" width={611} height={1133} alt="" />        
            <Image src="/images/Group 48096087-2.png" className="absolute -bottom-1/4 -right-1/2" width={1271} height={763} alt="" />        
            <Image src="/images/circles.png" className="absolute top-0 inset-x-0 h-[50vh] object-cover md:h-auto" width={1512} height={1252} alt="" />
            <Image src="/images/Rectangle 29.png" className="absolute top-0 right-0" width={320} height={564} alt="" />
            <Image src="/images/star-img.svg" className="absolute top-1/2 -translate-y-1/2 left-4" width={61} height={60} alt="" />
            <Image src="/images/star-img.svg" className="absolute top-3/4 -translate-y-1/2 right-4" width={61} height={60} alt="" />
                     
            <Header home={true} />

            <div className="relative mt-20">
                <h3 className="candal text-4xl text-center relative z-10 text-white px-6">Grid</h3>

                <div className="p-6 lg:px-24">
                    <section className="p-4 justify-between items-start md:gap-6 rounded-md bg-gradient-to-t from-[#1784E242] to-[#0B62D042] border-[1px] border-solid border-white/40 w-full md:w-fit flex text-white">
                        <div className="flex gap-2">
                        <Image src="/images/girl.png" className="h-10 w-auto aspect-square bg-green-400 rounded-full" width={256} height={256} alt="" />
                        <div className="h-10 flex justify-between items-stretch flex-col">
                            <p className="candal font-semibold text-white">08KM46</p>
                            <p className="baloo-bhaijaan-2 font-semibold text-white"><span className="text-white/70">Bought 1.00 SOL of </span>DJGRL</p>
                        </div>
                        </div>

                        <p className="baloo-bhaijaan-2 font-semibold text-white/70">0s</p>
                    </section>

                    <section className="mt-6 flex flex-col gap-2 py-6 candal bg-blur text-center bg-gradient-to-t from-[#0B62D043] to-[#1784E243]  border-[1px] border-solid border-white/40  text-white rounded-2xl">
                        <Image src="/images/girl.png" className="h-24 w-24 mx-auto aspect-square bg-green-400 rounded-full" width={256} height={256} alt="" />
                        <h3 className="font-black text-2xl text-white">DJGIRL MP3 $DJGIRL</h3>
                        <h2 className="font-black text-2xl text-white">Market Cap:</h2>
                        <p className="font-black text-3xl text-white">$5678</p>
                    </section>
                </div>

                <div className="p-6 lg:px-24">
                    <div className="p-2 grid grid-cols-2 w-fit border-[1px] border-solid border-white rounded-full relative gap-4 bg-[#08203B]">
                        <button ref={fuel} onClick={fuelClick} className="rounded-full p-2 px-6 bg-[#1784E2]"><Image src="/images/fuel-pump.svg" className="h-6" width={33} height={33} alt="" /></button>
                        <button ref={block} onClick={blockClick} className="rounded-full p-2 px-6"><Image src="/images/Group 48096107.svg" className="h-6" width={33} height={33} alt="" /></button>
                    </div>


                    <div className="">
                        <section className="refer-banner flex flex-col lg:flex-row gap-4 items-center justify-between rounded-2xl p-4 mt-4 w-full">
                            <div className="grid gap-4 w-full">
                                <input type="text" className="w-full px-4 py-3 border-[1px] border-solid border-white/30 bg-transparent rounded-xl" placeholder="Enter Anything" />
                            </div>
                            <button className="baloo-bhaijaan-2 text-xl bg-gradient-to-tr from-[#0B62D0] to-[#A3D4FF] px-8 py-3 border-[1px] border-solid border-white rounded-[10px] w-full lg:w-fit lg:py-2 font-semibold">Search</button>
                        </section>
                    </div>

                    <section className="flex gap-4 mt-4 overflow-auto">
                        <TrackerCategories image={"/images/fire.svg"} text={"Hot"} active={"active-track-category"} />
                        <TrackerCategories image={"/images/audio.svg"} text={"Audio"} active={""} />
                        <TrackerCategories image={"/images/fire.svg"} text={"Hot"} active={""} />
                        <TrackerCategories image={"/images/fire.svg"} text={"Hot"} active={""} />
                    </section>

                    <section className="grid">
                        <TrackerUsers image={"/images/girl.png"} ticker={"$DJGRL"} name={"$DJGRL MP3"} mc="7.7k" time="7m" followers="54" comments="7" text="I will help you create a remix" creator="Music_Makerpro" />
                        <TrackerUsers image={"/images/girl.png"} ticker={"$DJGRL"} name={"$DJGRL MP3"} mc="7.7k" time="7m" followers="54" comments="7" text="I will help you create a remix" creator="Music_Makerpro" />
                        <TrackerUsers image={"/images/girl.png"} ticker={"$DJGRL"} name={"$DJGRL MP3"} mc="7.7k" time="7m" followers="54" comments="7" text="I will help you create a remix" creator="Music_Makerpro" />

                    </section>
                </div>

            </div>
        </div>

        <Footer />
    </>
)}