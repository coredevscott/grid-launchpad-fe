import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { ReferBanner } from "@/components/refer-banner";
import RecentAgents from "@/components/recent-agents";

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

            <div className="flex flex-col lg:flex-row p-8 lg:px-24 gap-8 relative">
                <div className="w-full lg:w-1/3 bg-gradient-to-t from-[#1784E243] to-[#0B62D043] p-8 rounded-2xl relative">
                    <div className="bg-blur absolute inset-0 rounded-2xl"></div>

                    <div className="relative">
                    <Image src="/images/girl.png" className="w-1/2 md:w-1/4 lg:w-1/3 mx-auto bg-green-500 rounded-full" width={256} height={256} alt="" />
                    <p className="candal-regular mickey bg-gradient-to-br from-[#1784E2] to-white text-2xl text-center mt-4">Mickle</p>
                    <p className="inter mt-3 text-center text-white">19k Followers . 870 Following</p>

                    <hr className="my-4" />
                    <div className="flex flex-col gap-4">
                        <Link href="/profile" className="baloo-bhaijaan-2 text-xl font-bold text-white">Profile</Link>
                        <Link href="/recent-agents" className="baloo-bhaijaan-2 text-xl font-bold text-[#00B0FF]">Recent Agents</Link>
                        <Link href="#" className="baloo-bhaijaan-2 text-xl font-bold text-white">Community</Link>
                    </div>
                    </div>
                </div>


                <div className="w-full lg:w-1/2 lg:w-2/3 bg-gradient-to-t from-[#1784E243] to-[#0B62D043] p-8 rounded-2xl relative">
                    <h2 className="audiowide-regular text-2xl w-full pb-2 border-b-[1px] border-solid border-white text-white">Recent agents</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mt-4">
                    <RecentAgents image="/images/image.png" name="My Agent" amount="32 Sol" percent="3.99%" />
                    <RecentAgents image="/images/image.png" name="My Agent" amount="32 Sol" percent="3.99%" />
                    <RecentAgents image="/images/image.png" name="My Agent" amount="32 Sol" percent="3.99%" />
                    <RecentAgents image="/images/image.png" name="My Agent" amount="32 Sol" percent="3.99%" />
                    </div>
                </div>
            </div>
        </div>

        <ReferBanner />
        <Footer />
    </>
)}