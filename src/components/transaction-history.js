import Image from "next/image";

export default function TransactionHistory (prop) {
    let time
    prop.time == 'pending'? time = '(Pending)': time = prop.time

    return (
        <div className="flex gap-4 items-center text-white">
            <Image src={prop.image} className="w-14 h-14 bg-green-500 rounded-full" width={256} height={256} alt=""/>
            <div className="flex justify-between w-full baloo-2 border-b-2 border-solid border-white py-6">
                <div className="flex flex-col justify-between text-lg">
                    <section className="flex text-lg"><p className="text-lg mr-4 text-white">{prop.username}</p><Image src="/images/ic_round-person.svg" className="w-6 text-white" width={24} height={24} alt="" />{prop.followcount}</section>
                    { prop.action == 'buy'?<p className="text-[#39DD20]">Buy <span className="text-white/70">{time}</span></p>:<p className="text-[#C01C1C]">Sell <span className="text-white/70">{time}</span></p> }
                </div>

                <div className="h-full flex flex-col justify-between items-end text-lg w-1/3 text-right">
                    <p className="baloo-2 font-bold text-white">{prop.amount} <span className="font-light">SOL</span></p>
                    <p className="baloo-2 font-bold truncate text-white/70 w-full relative">{prop.tokenamount} {prop.tokenname}</p>
                </div>
            </div>
        </div>
    )
}