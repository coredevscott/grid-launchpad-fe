import Image from "next/image";

export default function RecentAgents(props) {
    return (
        <div className="recent-agents border-[1px] border-solid border-white flex gap-4 bg-gradient-to-b from-[#224F76] to-[#061C36] p-4 rounded-xl text-white">
            <div className="w-1/2">
                <Image src={props.image} className="" width={133} height={126} alt="" />

                <p className="text-xl inter my-2">{props.name}</p>
                <div className="flex w-fit flex-no-wrap">
                    <Image src="/images/Ellipse 2943.png" className="border-2 border-solid border-[#75298E] rounded-full w-9 h-9" width={40} height={40} alt="" />
                    <Image src="/images/Ellipse 2943.png" className="border-2 border-solid border-[#75298E] rounded-full w-9 h-9 -ml-4" width={40} height={40} alt="" />
                    <Image src="/images/Ellipse 2943.png" className="border-2 border-solid border-[#75298E] rounded-full w-9 h-9 -ml-4" width={40} height={40} alt="" />
                    <Image src="/images/Ellipse 2943.png" className="border-2 border-solid border-[#75298E] rounded-full w-9 h-9 -ml-4" width={40} height={40} alt="" />
                    <p className="bg-black/60 rounded-full w-9 h-9 -ml-4 flex justify-center items-center">+43</p>
                </div>
            </div>
            <div className="w-1/2 flex items-end justify-end flex-col gap-y-2">
                <p className="inter font-semibold text-white">32 Sol</p>
                <p className="inter text-[#089641]">3.99%</p>
            </div>
        </div>
    )
}