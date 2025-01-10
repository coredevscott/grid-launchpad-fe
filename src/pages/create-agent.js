import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { useRef, useState } from "react";
import BitcoinMarqueeChild from "@/components/bitcoin-marquee-child";

export default function CreateAgent() {
    const [header, setHeader] = useState(true)
    const closeModalButton = useRef(null)
    const modal = useRef(null)

    const closeModal = () => {
        modal.current.style.display = "none"
        //setHeader(false)
    }

    return (
    <>  
        <div ref={modal} className="fixed inset-0 flex justify-center items-center bg-[#0B0B0F76] z-50 text-white">
            <div className="bg-[#0D3563] rounded-2xl lg:rounded-[53px] text-white p-12 relative">

                <button ref={closeModalButton} onClick={closeModal} className="absolute right-12 top-12"><Image src="/images/ic_baseline-close.svg" className="w-8" width={40} height={40} alt="" /></button>

                <h2 className="candal text-2xl capitalize text-center mb-12 mt-12">Create new agent</h2>
                <section className="grid md:grid-cols-2 text-center gap-8">
                    <div className="flex flex-col p-8 gap-4 bg-[#092F5B] rounded-[30px]" onClick={closeModal}>
                        <Image src="/images/Group 48096156.svg" className="w-20 mx-auto" width={84} height={87} alt="" />
                        <p className="audiowide-regular text-xl text-white">Launch a new Token</p>
                    </div>

                    <Link href="/import-agent" className="flex flex-col p-8 gap-4 bg-[#092F5B] rounded-[30px]">
                        <Image src="/images/ri_token-swap-line.svg" className="w-20 mx-auto" width={84} height={87} alt="" />
                        <p className="audiowide-regular text-xl text-white">I have my own token</p>
                    </Link>                
                </section>
            </div>
        </div>

        <div className="create-agent bg-contain bg-top bg-no-repeat relative md:bg-none text-white">
            <Image src="/images/Group 48096087.png" className="absolute -bottom-12 left-0" width={611} height={1133} alt="" />        
            <Image src="/images/Group 48096087-2.png" className="absolute -bottom-1/4 -right-1/2" width={1271} height={763} alt="" />        
            <Image src="/images/circles.png" className="absolute top-0 inset-x-0 h-[50vh] object-cover md:h-auto" width={1512} height={1252} alt="" />
            <Image src="/images/Rectangle 29.png" className="absolute top-0 right-0" width={320} height={564} alt="" />
            <Image src="/images/star-img.svg" className="absolute top-1/2 -translate-y-1/2 left-4" width={61} height={60} alt="" />
            <Image src="/images/star-img.svg" className="absolute top-3/4 -translate-y-1/2 right-4" width={61} height={60} alt="" />
                        
        <Header ca={header} />

        <div className="relative mt-20">
            <h3 className="candal text-4xl text-center relative z-10 text-white px-6">Create New Agent</h3>

            <section className="refer-banner flex flex-col lg:flex-row gap-4 items-center justify-between mx-6 rounded-2xl p-4 mt-16 md:w-2/3 md:mx-auto text-white">
                <div className="grid lg:grid-cols-2 gap-4 w-full">
                    <input type="text" className="w-full px-4 py-3 border-[1px] border-solid border-white/30 bg-transparent rounded-xl" placeholder="Agent Name" />
                    <input type="text" className="w-full px-4 py-3 border-[1px] border-solid border-white/30 bg-transparent rounded-xl" placeholder="Agent Name" />
                </div>
                <button className="baloo-bhaijaan-2 text-xl bg-gradient-to-tr from-[#0B62D0] to-[#A3D4FF] px-8 py-3 border-[1px] border-solid border-white rounded-[10px] w-full lg:w-fit lg:py-2 text-white">Search</button>
            </section>

            <Marquee autoFill={true}>
                <div className="flex gap-4 mr-4 mt-8 text-white">
                    <BitcoinMarqueeChild image={"/images/bitcoin-logo.svg"} text={"Bitcoin"} price={"$23,3B"} percent={"71.68"} />
                    <BitcoinMarqueeChild image={"/images/bitcoin-logo.svg"} text={"Bitcoin"} price={"$23,3B"} percent={"71.68"} />
                    <BitcoinMarqueeChild image={"/images/bitcoin-logo.svg"} text={"Bitcoin"} price={"$23,3B"} percent={"71.68"} />
                    <BitcoinMarqueeChild image={"/images/bitcoin-logo.svg"} text={"Bitcoin"} price={"$23,3B"} percent={"71.68"} />
                </div>
            </Marquee>
            <Marquee autoFill={true} direction="right">
                <div className="flex gap-4 mr-4 mt-4">
                    <BitcoinMarqueeChild image={"/images/bitcoin-logo.svg"} text={"Bitcoin"} price={"$23,3B"} percent={"71.68"} />
                    <BitcoinMarqueeChild image={"/images/bitcoin-logo.svg"} text={"Bitcoin"} price={"$23,3B"} percent={"71.68"} />
                    <BitcoinMarqueeChild image={"/images/bitcoin-logo.svg"} text={"Bitcoin"} price={"$23,3B"} percent={"71.68"} />
                    <BitcoinMarqueeChild image={"/images/bitcoin-logo.svg"} text={"Bitcoin"} price={"$23,3B"} percent={"71.68"} />
                </div>
            </Marquee>

            <section className="bg-gradient-to-t from-[#0B62D042] to-[#1784E242] rounded-2xl border-[1px] border-solid border-white/40 p-4 m-6 lg:my-12 lg:mx-24 text-white">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-6">
                        <div className="h-full relative bg-[#08203B] border-[1px] border-solid border-white rounded-2xl p-8">
                            <input type="file" className="absolute inset-0 w-full z-10 opacity-0" />
                            <div className="flex flex-col justify-center items-center h-full">
                                <Image src="/images/mage_image-upload.svg" width={86} height={89} alt="" />
                                <p className="inter text-xl text-white">Upload Image</p>
                            </div>
                        </div>

                        <label className="audiowide-regular text-white">Bio</label>
                        <input type="text" className="p-3 md:p-4 bg-white/15 border-[1px] border-solid border-white/10 rounded-xl text-white" />

                        <label className="audiowide-regular text-white">X Link (optional)</label>
                        <input type="text" className="p-3 md:p-4 bg-white/15 border-[1px] border-solid border-white/10 rounded-xl text-white" />

                    </div>
                    <div className="flex flex-col gap-6">
                        <label className="audiowide-regular text-white">Agent Name</label>
                        <input type="text" className="p-3 md:p-4 bg-white/15 border-[1px] border-solid border-white/10 rounded-xl text-white" />

                        <label className="audiowide-regular text-white">Ticker</label>
                        <input type="text" className="p-3 md:p-4 bg-white/15 border-[1px] border-solid border-white/10 rounded-xl text-white" />

                        <label className="audiowide-regular text-white">KYC/Non-KYC</label>
                        <input type="text" className="p-3 md:p-4 bg-white/15 border-[1px] border-solid border-white/10 rounded-xl text-white" />

                        <label className="audiowide-regular text-white">Telegram Link (optional)</label>
                        <input type="text" className="p-3 md:p-4 bg-white/15 border-[1px] border-solid border-white/10 rounded-xl text-white" />

                    </div>
                </div>
                <div className="mt-6">
                    <label className="audiowide-regular mb-6 text-white">Description</label>
                    <textarea className="p-3 md:p-4 bg-white/15 border-[1px] border-solid border-white/10 rounded-xl h-56 w-full mt-6 text-white"></textarea>
                </div>
            </section>
        </div>
        </div>

        <Footer />
    </>
)}