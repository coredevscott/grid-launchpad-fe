import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Footer from "@/components/footer";
import DTM from "@/components/deflationary-token-mechanism";
import VirtualsPartners from "@/components/virtuals-partners";
import WhyChoose from "@/components/why-choose";
import { Header } from "@/components/header";
import { ReferBanner } from "@/components/refer-banner";

export default function Profile1() {
  return (
    <>
        <div className="relative">
            <Image src="/images/circles.png" className="absolute top-0 inset-x-0 h-[50vh] object-cover md:h-auto" width={1512} height={1252} alt="" />
            <Image src="/images/Rectangle 29.png" className="absolute top-0 right-0" width={320} height={564} alt="" />
            <Image src="/images/star-img.svg" className="absolute top-1/2 -translate-y-1/2 left-4" width={61} height={60} alt="" />
            <Image src="/images/star-img.svg" className="absolute top-3/4 -translate-y-1/2 right-4" width={61} height={60} alt="" />
                    
            <Header profile={true} />

            <h2 className="candal text-4xl text-center relative z-10 text-white">Profile</h2>

            <div className="flex flex-col md:flex-row p-8 gap-8 relative">
                <div className="w-full md:w-1/2 lg:w-1/3 bg-gradient-to-t from-[#1784E243] to-[#0B62D043] p-8 rounded-2xl relative">
                    <div className="bg-blur absolute inset-0 rounded-2xl"></div>

                    <div className="relative">
                        <Image src="/images/girl.png" className="w-1/2 md:w-1/3 mx-auto bg-green-500 rounded-full" width={256} height={256} alt="" />
                        <p className="candal-regular mickey bg-gradient-to-br from-[#1784E2] to-white text-2xl text-center mt-4">Mickle</p>
                        <p className="inter mt-3 text-center text-white">19k Followers . 870 Following</p>

                        <hr className="my-4" />
                        <div className="flex flex-col gap-4">
                            <Link href="#" className="baloo-bhaijaan-2 text-xl font-bold text-[#00B0FF]">Profile</Link>
                            <Link href="/recent-agents" className="baloo-bhaijaan-2 text-xl font-bold text-white">Recent Agents</Link>
                            <Link href="#" className="baloo-bhaijaan-2 text-xl font-bold text-white">Community</Link>
                        </div>
                    </div>
                </div>


                <div className="w-full md:w-1/2 lg:w-2/3 bg-gradient-to-t from-[#1784E243] to-[#0B62D043] p-8 rounded-2xl relative">
                    <h2 className="audiowide-regular text-2xl w-full pb-2 border-b-[1px] border-solid border-white">Profile</h2>
                    <div className="relative w-1/2 my-8 md:w-32 mx-auto">
                        <Image src="/images/girl.png" className="bg-green-500 w-full mx-auto border-2 border-solid border-white rounded-full h-full" width={256} height={256} alt="" />
                        <button className="bg-gradient-to-bl from-[#1784E2] to-[#0B62D0] p-1 rounded absolute -bottom-0 right-0">
                            <Image src="/images/edit_svgrepo.com.svg" className="w-4" width={24} height={24} alt="" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label for="username" className="baloo-bhaijaan-2 text-xl">Username</label>
                            <input id="username" type="text" className="w-full px-4 py-3 bg-white/5 rounded-xl" placeholder="@mikleeu" />
                        </div>

                        <div>
                            <label for="wallet" className="baloo-bhaijaan-2 text-xl">Wallet</label>
                            <input id="wallet" type="text" className="w-full px-4 py-3 bg-white/5 rounded-xl" placeholder="wgDPrKF1TjEDDTzod2j4D2KpqzVWCc" />
                        </div>

                        <div>
                            <label for="username" className="baloo-bhaijaan-2 text-xl">Username</label>
                            <input id="username" type="text" className="w-full px-4 py-3 bg-white/5 rounded-xl" placeholder="283h976qwe9ry25r817gf31f4f" />
                        </div>

                        <Image src="/images/Rectangle 39232.png" className="w-full md:w-1/2" width={220} height={220} alt="" />
                    </div>

                    <button className="baloo-bhaijaan-2 text-xl bg-gradient-to-tr from-[#0B62D0] to-[#A3D4FF] px-8 py-3 border-[1px] border-solid border-white rounded-[10px] w-full mt-6 lg:absolute lg:left-8 lg:bottom-8 lg:w-fit lg:py-2">Share</button>
                    
                </div>
            </div>
        </div>

        <ReferBanner />
        <Footer />
    </>
)}