import Image from "next/image";

export default function AccountRanking (prop) {
    return (
        <div className="flex justify-between pb-4 border-b-2 border-solid border-white w-full text-white">
            <div className="flex gap-2 items-center w-full">
                <Image src={prop.image} className="bg-green-500 size-12 rounded-full" width={256} height={256} alt="" />
                <div className="h-full flex flex-row justify-between items-stretch gap-y-2 flex-wrap w-full">
                    <p className="text-white font-semibold w-1/2">{prop.name}</p>
                    <p className="text-white font-light w-1/2 text-right">{prop.percent}%</p>
                    <p className="text-white">{prop.amount} {prop.token}</p>
                </div>
            </div>

            <div></div>
        </div>
    )
}