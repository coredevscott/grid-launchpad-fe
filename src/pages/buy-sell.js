import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/header";
import { useRef, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import Example from "@/components/buy-sell-chart";
import TransactionHistory from "@/components/transaction-history";
import TXData from "@/components/txdata";
import AccountRanking from "@/components/account-ranking";
import Footer from "@/components/footer";

export default function BuySell() {
    const negativeFigure = -34
    const positiveFigure = 50
    const [solAmount, setSolAmount] = useState(0)

    const closeModalButton = useRef(null)
    const modal = useRef(null)
    const cap = useRef(null)
    const price = useRef(null)
    const lite = useRef(null)
    const pro = useRef(null)
    const tx = useRef(null)
    const trades = useRef(null)
    const traders = useRef(null)
    const buy = useRef(null)
    const sell = useRef(null)
    const openSectionButton = useRef(null)
    const firstSection = useRef(null)
    const secondSection = useRef(null)
    
    const buyClick = () => {
        sell.current.style.backgroundColor = "transparent"
        sell.current.style.color = "#fff"
        buy.current.style.backgroundColor = "#1784E2"
        buy.current.style.color = "#000"
    }

    const sellClick = () => {
        sell.current.style.backgroundColor = "#1784E2"
        sell.current.style.color = "#000"
        buy.current.style.backgroundColor = "transparent"
        buy.current.style.color = "#fff"
    }

    const toggleSection = () => {
        const firstSectionDisplay = firstSection.current.style.display

        console.log(firstSectionDisplay)
        if (firstSectionDisplay == '' || firstSectionDisplay == 'block') {
            firstSection.current.style.display = 'none'
        } else {
            firstSection.current.style.display = 'block'
        }
    }

    const capClick = () => {
        cap.current.style.backgroundColor = '#1784E2'
        cap.current.style.borderColor = '#fff'
        price.current.style.backgroundColor = 'transparent'
        price.current.style.borderColor = 'transparent'
    }

    const priceClick = () => {
        cap.current.style.backgroundColor = 'transparent'
        cap.current.style.borderColor = 'transparent'
        price.current.style.backgroundColor = '#1784E2'
        price.current.style.borderColor = '#fff'
    }

    const liteClick = () => {
        lite.current.style.backgroundColor = '#1784E2'
        pro.current.style.backgroundColor = 'transparent'
    }

    const proClick = () => {
        pro.current.style.backgroundColor = '#1784E2'
        lite.current.style.backgroundColor = 'transparent'
    }

    const aTXClick = () => {
        tx.current.style.backgroundColor = '#1784E2'
        
        trades.current.style.backgroundColor = 'transparent'
        traders.current.style.backgroundColor = 'transparent'

        tx.current.style.color = '#FFFFFF'
        trades.current.style.color = '#FFFFFF70'
        traders.current.style.color = '#FFFFFF70'
    }

    const mTXClick = () => {
        tx.current.style.backgroundColor = 'transparent'

        trades.current.style.backgroundColor = '#1784E2'
        traders.current.style.backgroundColor = 'transparent'

        tx.current.style.color = '#FFFFFF70'
        trades.current.style.color = '#FFFFFF'
        traders.current.style.color = '#FFFFFF70'
    }

    const tTXClick = () => {
        tx.current.style.backgroundColor = 'transparent'
        
        trades.current.style.backgroundColor = 'transparent'
        traders.current.style.backgroundColor = '#1784E2'

        tx.current.style.color = '#FFFFFF70'
        trades.current.style.color = '#FFFFFF70'
        traders.current.style.color = '#FFFFFF'
    }

    function populateAmount (amount) {
        setSolAmount(amount)
    }

    return (
    <>  
        <div className="create-agent bg-contain bg-top bg-no-repeat relative md:bg-none mb-24">
            <Image src="/images/circles.png" className="absolute top-0 inset-x-0 h-[50vh] object-cover md:h-auto" width={1512} height={1252} alt="" />
            <Image src="/images/Group 48096087.png" className="absolute -bottom-12 left-0" width={611} height={1133} alt="" />        
            <Image src="/images/Group 48096087-2.png" className="absolute -bottom-1/4 -right-1/2" width={1271} height={763} alt="" />        
            <Image src="/images/Rectangle 29.png" className="absolute top-0 right-0" width={320} height={564} alt="" />        
            <Image src="/images/star-img.svg" className="absolute top-1/2 -translate-y-1/2 left-4" width={61} height={60} alt="" />
            <Image src="/images/star-img.svg" className="absolute top-3/4 -translate-y-1/2 right-4" width={61} height={60} alt="" />
                        
            <Header bs={true} />

            <div className="relative mt-20">
                <h3 className="candal text-4xl text-center relative z-10 text-white px-6">Grid</h3>

                <div className="p-6 lg:px-24">
                    <section className="p-4 justify-between items-start md:gap-6 rounded-md bg-gradient-to-t from-[#1784E242] to-[#0B62D042] border-[1px] border-solid border-white/40 w-full md:w-fit flex text-white">
                        <div className="flex gap-2">
                        <Image src="/images/girl.png" className="h-10 w-auto aspect-square bg-green-400 rounded-full" width={256} height={256} alt="" />
                        <div className="h-10 flex justify-between items-stretch flex-col">
                            <p className="candal font-semibold text-white">08KM46</p>
                            <p className="baloo-bhaijaan-2 font-semibold"><span className="text-white/70">Bought 1.00 SOL of </span>DJGRL</p>
                        </div>
                        </div>

                        <p className="baloo-bhaijaan-2 font-semibold text-white/70">0s</p>
                    </section>
                </div>

                <section className="p-6 lg:px-24 flex gap-12 flex-col lg:flex-row">
                    <section className="lg:w-2/3">
                        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center text-lg">
                            <div className="flex w-full md:w-fit gap-4 justify-between">
                                <div className="flex justify-between w-fit items-center gap-4">
                                    <Image src="/images/girl.png" className="bg-green-500 rounded-full h-12 w-12" width={256} height={256} alt="" />
                                    <div className="flex flex-col">
                                        <p className="candal truncate w-3/4 text-white">Dancing Girl</p>
                                        <p className="candal truncate w-3/4 text-white">0s</p>
                                    </div>
                                </div>

                                <button onClick={ toggleSection } className="size-10 md:hidden"><Image src="/images/dashboard_56dp_FFF_FILL0_wght400_GRAD0_opsz48.png" width={224} height={224} alt="" /></button>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex flex-col gap-4">
                                    <p className="candal text-white/70">Dev</p>
                                    <p className="baloo-bhaijaan-2 text-white">@MjFandc</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="candal text-white/70">Cap</p>
                                    <p className="baloo-bhaijaan-2 text-white">$7,741</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="candal text-white/70">Progress</p>
                                    <div className="w-full h-4 bg-[#08203B] rounded-full border-[1px] border-solid border-white">
                                        <div className="w-1/2 h-full rounded-full bg-[#1784E2]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div ref={firstSection} className="">
                        <div className="w-full h-96 border-2 border-solid border-white p-2 rounded-xl mt-4 mb-8 pb-12">
                            <div className="grid grid-cols-2 w-fit bg-[#08203B] border-2 border-solid border-white p-1 rounded-full">
                                <button onClick={ capClick } ref={cap} className="text-sm py-1 px-4 bg-[#1784E2] rounded-full border-2 border-solid border-white">Cap</button>
                                <button onClick={ priceClick } ref={price} className="text-sm py-1 px-4 rounded-full border-2 border-solid border-transparent">Price</button>
                            </div>
                            <Example />
                        </div>

                        <div className="border-2 border-solid border-white p-2 rounded-xl bg-[#08203B] grid grid-cols-2 mt-4">
                            <button ref={lite} onClick={liteClick} className="p-1 text-lg baloo-2 bg-[#1784E2] rounded-xl text-white">Lite</button>
                            <button ref={pro} onClick={proClick} className="p-1 text-lg baloo-2 rounded-xl text-white">Pro</button>
                        </div>

                        <div className="grid grid-cols-3 p-2 rounded-full bg-[#08203B] w-fit my-4">
                            <button ref={tx} onClick={aTXClick} className="px-4 py-1 text-lg baloo-2 bg-[#1784E2] rounded-full truncate text-white">All Transactions</button>
                            <button ref={trades} onClick={mTXClick} className="px-4 py-1 text-lg baloo-2 rounded-full truncate text-white/70">My Trades</button>
                            <button ref={traders} onClick={tTXClick} className="px-4 py-1 text-lg baloo-2 rounded-full truncate text-white/70">Top Traders</button>
                        </div>

                        <div className="bg-gradient-to-t from-[#0B62D043] to-[#1784E243] border-2 border-solid border-white/40 p-4 grid rounded-2xl">
                            <TransactionHistory image="/images/girl.png" username="Aloeidae" followcount="1" action="buy" time="pending" amount="5" tokenamount="3.2M" tokenname="$DancingChicken" />
                            <TransactionHistory image="/images/girl.png" username="Aloeidae" followcount="1" action="buy" time="pending" amount="5" tokenamount="3.2M" tokenname="$DancingChicken" />
                            <TransactionHistory image="/images/girl.png" username="Aloeidae" followcount="1" action="buy" time="pending" amount="5" tokenamount="3.2M" tokenname="$DancingChicken" />
                        </div>
                        </div>
                    </section>

                    <section className="baloo-2 md:w-2/3 lg:w-1/3 mt-4 md:mt-0">
                        <div className="grid grid-cols-2 w-full bg-[#08203B] border-2 border-solid border-white rounded-xl">
                            <button ref={buy} onClick={ buyClick } className="text-sm py-2 px-4 rounded-xl bg-[#1784E2] text-black">Buy</button>
                            <button ref={sell} onClick={ sellClick } className="text-sm py-2 px-4 rounded-xl text-white">Sell</button>
                        </div>

                        <div className="flex justify-between p-4 bg-[#0B62D022] text-lg items-center mt-4 rounded-xl">
                            <input type="number" className="bg-transparent" value={solAmount} />
                            <button type="submit" className="text-white">SOL</button>
                        </div>

                        <div className="flex gap-2 mt-2 justify-center">
                            <button onClick={ () => populateAmount(3) } className="bg-[#0B1F3A] p-2 rounded-md text-white">3 SOL</button>
                            <button onClick={ () => populateAmount(10) } className="bg-[#0B1F3A] p-2 rounded-md text-white">10 SOL</button>
                            <button onClick={ () => populateAmount(50) } className="bg-[#0B1F3A] p-2 rounded-md text-white">50 SOL</button>
                            <button onClick={ () => populateAmount(100) } className="bg-[#0B1F3A] p-2 rounded-md text-white">100 SOL</button>
                        </div>

                        <button className="baloo-bhaijaan-2 text-xl bg-gradient-to-tr from-[#0B62D0] to-[#A3D4FF] px-8 py-3 border-[1px] border-solid border-white rounded-[10px] w-full lg:py-2 my-6 text-white">Connect Wallet</button>
                        
                        <div className="bg-[#0B62D022] rounded-xl p-6">
                            <section className="grid grid-cols-2 gap-4 baloo-2">
                                <div className="grid gap-1">
                                    <h2 className="inter font-light text-lg text-white">Price USD</h2>
                                    <p className="font-semibold text-lg text-white">$0.0000000721</p>
                                </div>

                                <div className="grid gap-1">
                                    <h2 className="inter font-light text-lg text-white">Price</h2>
                                    <p className="font-semibold text-lg text-white">$0.0000000721 SOL</p>
                                </div>
                            </section>

                            <section className="flex gap-4 justify-between mt-4">
                                <div className="grid gap-1">
                                    <h2 className="inter font-light text-lg text-white">MKT</h2>
                                    <p className="font-semibold text-lg text-white">$7.7k</p>
                                </div>
                                <div className="grid gap-1">
                                    <h2 className="inter font-light text-lg text-white">Liquidity</h2>
                                    <p className="font-semibold text-lg text-white">$3.8k</p>
                                </div>
                                <div className="grid gap-1">
                                    <h2 className="inter font-light text-lg text-white">TON Collected</h2>
                                    <p className="font-semibold text-lg text-white">401/1000</p>
                                </div>
                            </section>

                            <section className="grid grid-cols-3 md:grid-cols-4 gap-4 text-white mt-4">
                                <div className="bg-[#0B0B0F] text-lg flex flex-col gap-1 justify-center items-center p-2 border-2 border-solid border-grid-dark rounded-md">
                                    <p className="text-white">5M</p>
                                    { negativeFigure < 0?<p className="text-[#FF0000]">{ negativeFigure }%</p>:<p className="">{ negativeFigure }%</p>}
                                </div>

                                <div className="bg-[#0B0B0F] text-lg flex flex-col gap-1 justify-center items-center p-2 border-2 border-solid border-grid-dark rounded-md">
                                    <p className="text-white">10M</p>
                                    { positiveFigure < 0?<p className="text-[#FF0000]">{ positiveFigure }%</p>:<p className="">{ positiveFigure }%</p>}
                                </div>

                                <div className="bg-[#0B0B0F] text-lg flex flex-col gap-1 justify-center items-center p-2 border-2 border-solid border-grid-dark rounded-md">
                                    <p className="text-white">1H</p>
                                    { negativeFigure < 0?<p className="text-[#FF0000]">{ negativeFigure }%</p>:<p className="">{ negativeFigure }%</p>}
                                </div>
                                <div className="bg-[#0B0B0F] text-lg flex flex-col gap-1 justify-center items-center p-2 border-2 border-solid border-grid-dark rounded-md">
                                    <p className="text-white">24H</p>
                                    { negativeFigure < 0?<p className="text-[#FF0000]">{ negativeFigure }%</p>:<p className="">{ negativeFigure }%</p>}
                                </div>
                            </section>

                            <section className="flex flex-col gap-6 mt-6">
                                <TXData title="TXNS" total={647} left={394} right={254} />
                                <TXData title="TXNS" total={647} left={394} right={254} />
                                <TXData title="TXNS" total={647} left={394} right={254} />
                            </section>
                        </div>

                        <div className="bg-[#0B62D022] rounded-xl p-6 text-white mt-6">
                            <section className="w-full text-lg flex justify-between items-center">
                                <section className="flex w-fit gap-2 items-center">
                                    <Image src="/images/mdi_users-outline.svg" className="size-6" width={24} height={24} alt="" />
                                    <p className="text-white">Community Notes</p>
                                </section>
                                <section className="flex w-fit gap-2 items-center">
                                    <p className="text-white">View All</p>
                                    <Link href="#"><Image src="/images/lucide_arrow-up.svg" className="size-6" width={24} height={24} alt="" /></Link>
                                </section>
                            </section>

                            <div className="bg-[#1784E225] flex p-4 gap-4 text-lg mt-4 rounded-xl flex-wrap">
                                <Image src="/images/girl.png" className="bg-green-500 size-12 rounded-full" width={256} height={256} alt="" />
                                <div className="w-3/4">
                                    <p className="text-xl text-white">@illumina836ti</p>
                                    <p className="mt-2 leading-tight text-white">Memelandia and TON foundation tweeted CTO</p>
                                </div>
                                
                                <section className="w-full flex justify-between text-black bg-white/20 rounded p-2">
                                    <p className="text-black">Is this note helpful?</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <section className="flex gap-1 font-semibold"><button className=""><Image src="/images/solar_like-broken.svg" width={20} height={20} alt="" /></button><p className="text-black">3</p></section>
                                        <section className="flex gap-1 font-semibold"><button className=""><Image src="/images/solar_dislike-broken.svg" width={20} height={20} alt="" /></button><p className="text-black">3</p></section>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className="bg-[#0B62D022] rounded-xl p-6 text-white mt-6">
                            <section className="flex w-fit gap-2 items-center mb-4">
                                <Image src="/images/token-link.svg" className="size-6" width={24} height={24} alt="" />
                                <p className="text-white">Token Link</p>
                            </section>

                            <section className="bg-[#1784E225] w-full p-4 rounded-lg">
                                <section className="flex items-center justify-between bg-white/20 p-2 rounded">
                                    <p className="truncate w-3/4 text-white">https://sbdgsdty/djfhd?sjdbskndhsygt</p>
                                    <button className="">
                                        <svg width="24" height="25" className="w-5" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 8.5H10C8.89543 8.5 8 9.39543 8 10.5V20.5C8 21.6046 8.89543 22.5 10 22.5H20C21.1046 22.5 22 21.6046 22 20.5V10.5C22 9.39543 21.1046 8.5 20 8.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4 16.5C2.9 16.5 2 15.6 2 14.5V4.5C2 3.4 2.9 2.5 4 2.5H14C15.1 2.5 16 3.4 16 4.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </section>
                            </section>
                               
                        </div>

                        <p className="my-4 text-white">Share this link with your friends to get more GAS XP points if they join and trade.</p>

                        <div className="flex gap-4 bg-[#0B62D022] rounded-xl p-6 text-white mt-6">
                            <AccountRanking image="/images/girl.png" name="DANJ" token="dancing girl" amount="$356" percent="43.56" />
                        </div>
                    </section>
                </section>
            </div>
        </div>

        <Footer />
    </>
    )
}