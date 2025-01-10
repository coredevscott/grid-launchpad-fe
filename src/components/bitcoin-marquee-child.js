import Image from "next/image"


export default function BitcoinMarqueeChild (props) {
    return (
        <div className="text-white p-4 bg-gradient-to-t from-[#1784E242] to-[#0B62D042] rounded-md border-[1px] border-solid border-white/40">
            <div className="flex justify-between items-center gap-4">
                <div className="flex w-fit gap-4 items-center">
                <Image src={props.image} className="w-6 bg-[#0B62D033] rounded-lg" width={32} height={32} alt="" />
                <p className="inter text-white">{props.text}</p>
                </div>
                <p className="inter text-white">{props.price}</p>
            </div>
            <div className="flex gap-4 mt-4 items-center">
                <div className="bg-[#69666720] rounded-full w-32">
                    <div className={`w-[${props.percent}%] h-2 bg-gradient-to-tr from-[#FF5CF0] to-[#00FFFF] rounded-full`} style={{width: `${props.percent}%`}}></div>
                </div>
                <p className="inter text-sm w-1/5 text-white">{props.percent}%</p>
            </div>
        </div>
    )
}