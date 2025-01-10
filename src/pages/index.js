import Image from "next/image";
import Marquee from "react-fast-marquee";
import Footer from "@/components/footer";
import DTM from "@/components/deflationary-token-mechanism";
import VirtualsPartners from "@/components/virtuals-partners";
import WhyChoose from "@/components/why-choose";
import { Header } from "@/components/header";
import { useState } from "react";

export default function Home() {
    const [amountNeeded, setAmountNeeded] = useState(0)
    const [amountEarned, setAmountEarned] = useState(0)

  return (
    <>
        <nav className="relative">
        <Image src="/images/Group 48096162.png" className="absolute top-0 min-h-screen h-[150vh] md:h-auto" width={1512} height={1252} alt="" />
        <Image src="/images/Frame 36787.png" className="absolute top-0 right-0 z-10" width={995} height={356} alt="" />

        <Image src="/images/Group 48096163.png" className="absolute right-0 inset-y-0" width={2559} height={1584} alt="" />

        <Header />

        <div className="w-full relative min-h-[90vh] flex flex-col gap-8 justify-center items-center text-center z-10 px-8 md:px-0 text-white">
            <h1 className="text-shadow text-4xl md:text-5xl md:w-3/4 lg:w-1/2">Connect & Launch Together</h1>
            <p className="md:w-1/2 text-center text-xl">Explore a secure, decentralized, and community-powered launchpad featuring a revenue-sharing model. Join over 300,000 community members today!</p>
            <Image src="/images/rocket 1.svg" className="mt-4 w-16" width={154} height={154} alt="" />
        </div>
        </nav>

        <section className="mx-6 md:mx-24 bg-light-dark/10 p-6 md:py-9 md:px-9 lg:py-24 flex flex-col md:flex-row gap-4 lg:gap-24 rounded-3xl mt-24 relative text-white">
            <div className="flex flex-col md:w-1/2 gap-4">
                <h2 className="text-lg">$GRID SOL</h2>
                <div className="flex flex-no-wrap bg-[#0B62D019] rounded-md gap-8 md:gap-4 justify-between items-center p-4">
                    <p className="truncate w-4/5 md:w-3/4">wgDPrKF1TjEDDTzod2j4D2KpqzVWCcxtWsjQY79isjK</p>
                    <div className="flex gap-4">
                        <button className="">
                            <svg width="24" height="25" className="w-5" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 8.5H10C8.89543 8.5 8 9.39543 8 10.5V20.5C8 21.6046 8.89543 22.5 10 22.5H20C21.1046 22.5 22 21.6046 22 20.5V10.5C22 9.39543 21.1046 8.5 20 8.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 16.5C2.9 16.5 2 15.6 2 14.5V4.5C2 3.4 2.9 2.5 4 2.5H14C15.1 2.5 16 3.4 16 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <Image src="/images/UPSCALED-Trust-Wallet-Industry-Announcement-Featured-Image-Template 1.svg" className="w-6" width={27} height={27} alt="" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:w-1/2 gap-4">
                <h2 className="text-lg">$GRID SOL</h2>
                <div className="flex flex-no-wrap bg-[#0B62D019] rounded-md gap-8 md:gap-4 justify-between items-center p-4">
                    <p className="truncate w-4/5 md:w-3/4">wgDPrKF1TjEDDTzod2j4D2KpqzVWCcxtWsjQY79isjK</p>
                    <div className="flex gap-4">
                        <button className="">
                            <svg width="24" height="25" className="w-5" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 8.5H10C8.89543 8.5 8 9.39543 8 10.5V20.5C8 21.6046 8.89543 22.5 10 22.5H20C21.1046 22.5 22 21.6046 22 20.5V10.5C22 9.39543 21.1046 8.5 20 8.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 16.5C2.9 16.5 2 15.6 2 14.5V4.5C2 3.4 2.9 2.5 4 2.5H14C15.1 2.5 16 3.4 16 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <Image src="/images/UPSCALED-Trust-Wallet-Industry-Announcement-Featured-Image-Template 1.svg" className="w-6" width={27} height={27} alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section className="my-24 text-white">
            <h2 className="text-shadow text-4xl text-center px-6 md:px-0 text-white">Grid Supports All Blockchains</h2>

            <Marquee autoFill={true}>
                <div className="flex gap-4 mr-4 mt-8">
                    <Image src="/images/dark-aptos 1.png" className="w-36 px-8 py-4 bg-[#0B62D033] rounded-lg" width={158} height={38} alt="" />
                    <Image src="/images/arbitrum.png" className="card-shadow w-36 px-8 py-4 bg-[#0B62D033] rounded-lg" width={158} height={38} alt="" />
                    <Image src="/images/base.png" className="w-36 px-8 py-4 bg-[#0B62D033] rounded-lg" width={158} height={38} alt="" />
                    <Image src="/images/bnb.png" className="card-shadow  w-36 px-8 py-4 bg-[#0B62D033] rounded-lg" width={158} height={38} alt="" />
                    <Image src="/images/cardano.png" className="w-36 px-8 py-4 bg-[#0B62D033] rounded-lg" width={158} height={38} alt="" />
                </div>
            </Marquee>
            <Marquee autoFill={true} direction="right">
                <div className="flex gap-4 mr-4 mt-4">
                    <Image src="/images/ethereum.png" className="card-shadow w-36 px-8 py-4 bg-[#0B62D033] rounded-lg" width={96} height={38} alt="" />
                    <Image src="/images/mantle.png" className="w-36 px-8 py-4 bg-[#0B62D033] rounded-lg" width={158} height={38} alt="" />
                    <Image src="/images/optimism.png" className="card-shadow w-36 px-8 py-4 bg-[#0B62D033] rounded-lg" width={214} height={38} alt="" />
                    <Image src="/images/polkadot.png" className="w-36 px-8 py-4 bg-[#0B62D033] rounded-lg" width={158} height={38} alt="" />
                    <Image src="/images/polygon.png" className="card-shadow w-36 px-8 py-4 bg-[#0B62D033] rounded-lg" width={158} height={38} alt="" />
                </div>
            </Marquee>
        </section>

        <section className="text-center px-6 md:px-24 text-white">
            <h2 className="text-shadow text-4xl text-center">Our Commitment to Transparency</h2>
            <p className="mt-4">Learn how we calculate your allocation by reading <span className="text-[#6FBCFF]">this article.</span></p>

            <section className="grid md:grid-cols-2 gap-12 md:gap-6 lg:gap-24 mt-8">
                <div>
                <div className="grid grid-cols-2 text-left gap-x-4 gap-y-8">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="buy">If i want to buy</label>
                        <input type="number" onChange={(e) => setAmountNeeded(e.target.value * 2) } className="bg-[#0B62D019] text-white placeholder:text-white px-4 py-2 rounded-md" placeholder="0" />
                    </div>

                    <div className="flex flex-col gap-4">
                        <label htmlFor="buy">I will need</label>
                        <input type="number" className="bg-[#0B62D019] text-white placeholder:text-white px-4 py-2 rounded-md" placeholder="0" value={ amountNeeded } />
                    </div>

                    <div className="flex flex-col gap-4">
                        <label htmlFor="buy">If I stake for</label>
                        <div className="bg-[#0B62D019] text-white placeholder:text-white px-4 py-2 rounded-md flex w-full justify-between">
                            <input type="number" onChange={ (e) => setAmountEarned(e.target.value * 3) } className="bg-transparent w-3/4" placeholder="0" />
                            <select className="w-fit bg-transparent text-white">
                                <option className="text-black" value="days">Days</option>
                                <option className="text-black" value="months">Months</option>
                                <option className="text-black" value="years">Years</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <label htmlFor="buy">I will earn</label>
                        <input type="number" className="bg-[#0B62D019] text-white placeholder:text-white px-4 py-2 rounded-md" placeholder="0" value={ amountEarned } />
                    </div>
                </div>
                <p className="my-4 text-left">Get a guaranteed allocation in all sales and earn rewards by staking your $GRID tokens at https://staking.grid.net</p>
                </div>

                <div className="border-2 border-solid border-grid-color rounded-3xl shadow-6FBCFF p-12 md:p-6 lg:p-12 text-left bg-[#1784E210]">
                    <h2 className="text-2xl">Launchpad Allocation</h2>
                    <p className="my-4">By staking and voting, you can access approximately:</p>

                    <h3 className="text-2xl text-[#004CAD] mb-4">$0.00</h3>
                    <p>$0.00 in Private Round Sale (Booster 1)</p>
                    <h3 className="text-2xl my-4 text-[#004CAD]">$0.00</h3>
                    <p>$0.00  in Public Round Sale (Booster 1)</p>
                </div>
            </section>
        </section>

        <section className="token-mech mt-24 text-center py-36 relative z-10 text-white">
            <div className="px-6 md:px-24 lg:px-72">
                <h2 className="text-shadow text-4xl">Deflationary Token Mechanism</h2>
                <p className="my-8 text-white text-xl">From an initial minting of 40 billion Grid tokens, the maximum supply is capped at 2 billion. Our unique deflationary model includes Social Engagement Burning and a 50% penalty on premature withdrawals, reducing the total supply over time.</p>
            </div>

            <section className="grid md:grid-cols-2 lg:grid-cols-4 px-24 gap-16 mt-16 text-white">
                <DTM image={"/images/ph_hand-coins.svg"} title={"Starting Supply:"} text={"40B $GRID tokens"} />
                <DTM image={"/images/solar_bill-cross-outline.svg"} title={"Total Burned:"} text={"33.27B $GRID tokens"} />
                <DTM image={"/images/iconoir_coins.svg"} title={"Maximum Supply Cap:"} text={"2B $GRID tokens"} />
                <DTM image={"/images/lucide-lab_coins-exchange.svg"} title={"Circulating Supply:"} text={"1.68B $GRID tokens"} />
            </section>
        </section>

        <section className="mb-24 text-center py-36 relative text-white">
            <Image src="/images/sphere-virtual.png" className="absolute -top-16 left-[10%] w-1/3" width={65} height={65} alt="" />
            <Image src="/images/sphere-virtual-2.png" className="absolute top-[15%] left-0 w-1/3" width={65} height={65} alt="" />
            <Image src="/images/Group 48096164.png" className="absolute -bottom-1/2 right-0 z-0" width={679} height={1109} alt="" />
            <Image src="/images/bg-img.png" className="absolute top-[50%] left-0" width={600} height={1045} alt="" />

            <div className="px-6 md:px-12 lg:px-72 relative z-10">
                <h2 className="text-shadow text-4xl">Grid Partners</h2>
                <h2 className="text-5xl my-4 text-light-dark">37.000</h2>
                <p className="my-8 text-white text-xl">Join over 37,000 token holders across four unique partner tiers, each with exclusive benefits.</p>
            </div>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10 px-6 md:px-24 mt-16">
                <VirtualsPartners title={"Grid Liquidity Provider"} subtitle={"Stake any amount of Grid SOL/LP Tokens and enjoy:"} list={["Additional Allocation in IKOs", "Revenue Sharing Benefits", "Access to Free Tokens", "Earnings from Trading Fees", "Exemption from FCFS and Community Round Fees"]}/>
                <VirtualsPartners title={"Grid Stakers"} subtitle={"Stake 3,000 Grid tokens to enjoy:"} list={["Voting and participation rights in public IKO rounds", "Access to exclusive Grid events (AMA, Airdrops, Learn & Earn, etc.)", "Up to 10% APY on staking"]}/>
                <VirtualsPartners title={"Grid Private Partner"} subtitle={"Stake 500,000 Grid tokens to enjoy:"} list={["All benefits included in FairLaunch Stakers", "Voting and participation in Private Round IKOs", "Quarterly Revenue Sharing", "Access to the Grid Private Partner Group"]}/>
                <VirtualsPartners title={"Grid Millionaire Partner"} subtitle={"Stake 10,000,000 Grid tokens to enjoy:"} list={["All benefits of Grid Private Partner", "Monthly Revenue Sharing", "Free Grid Merchandise", "Access to the Grid Millionaire Partner Group", "Exclusive access to Private and Seed Round Deals"]}/>
            </section>
        </section>

        <section className="relative z-10 text-white">
            <h2 className="text-shadow text-4xl text-center relative px-6 md:px-12 lg:px-72">Why Choose Grid</h2>

            <div className="grid md:grid-cols-2 px-6 md:px-12 lg:px-24 gap-8 lg:gap-16 mt-8">
                <WhyChoose title={"Deflationary Tokenomics"} image={"/images/Icon-Tokenomic 1.png"} text={"Scarcity by Design! Our model reduces token supply with 95% token burns and Social Engagement Burning. Plus, if users withdraw their stake early, 50% of the tokens are automatically burned, maintaining a deflationary trend."} />
                <WhyChoose title={"Community-Driven Approach"} image={"/images/Icon-Tokenomic 2.png"} text={"Your Voice Shapes the Future! FairLaunch is focused on the community, welcoming feedback and suggestions. Every month, we recognize the best ideas with rewards. Join us in building a better launchpad together!"} />
                <WhyChoose title={"Staking & Farming Rewards"} image={"/images/Icon-Tokenomic 3.png"} text={"Maximize Your Returns! Stake Grid or Grid/SOL LP tokens through our portal or partners to earn interest or trading fees. Enjoy free tokens from other projects when staking in our 730-day pool."} />
                <WhyChoose title={"Guaranteed Allocation"} image={"/images/Icon-Tokenomic 4.png"} text={"Equal Opportunity htmlFor All! With Grid, every staked token counts toward your project allocation. No tier system—every holder receives a proportional guaranteed allocation based on their holdings."} />
            </div>
        </section>
        
        <section className="email relative bg-gradient-to-r from-[#57B1FF] to-[#0049A6] mx-6 lg:mx-24 p-6 lg:p-12 flex flex-wrap lg:flex-nowrap rounded-3xl my-8 mb-24 md:mt-24 text-white">
            <h2 className="text-lg md:text-2xl lg:text-3xl md:w-3/6">Shaping the Future, Now. Join the Movement.</h2>

            <section className="flex gap-4 items-end md:w-3/6">
                <Image src="/images/email 1.png" className="h-1/2 w-auto md:w-1/4 md:h-auto md:relative md:-bottom-6 lg:-bottom-12" width={216} height={216} alt="" />

                <div className="w-fit md:w-3/4">
                    <p className="font-light w-full mb-4">For the latest news and updates, subscribe to our newsletter.</p>
                    <div className="bg-[#003B86] rounded-lg py-2 px-4 flex items-center justify-between">
                        <input type="email" className="bg-transparent text-lg w-full" placeholder="Email" />
                        <button className=""><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0001 7.08325L26.9167 16.9999M26.9167 16.9999L17.0001 26.9166M26.9167 16.9999L7.08341 16.9999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                    </div>
                </div>
            </section>
        </section>
        
        <Footer />
    </>
  )
}