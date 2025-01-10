import Image from "next/image";
import Link from "next/link";

export default function TrackerUsers (prop) {
    return (
        <Link href="/buy-sell" className="flex justify-between text-white border-b-2 border-solid border-white/70 py-6">
            <div className="flex gap-4">
                <Image src={prop.image} className="w-12 h-12 rounded-full bg-green-500" width={256} height={256} alt=""/>
                <div className="">
                    <p className="candal text-xl text-white">{prop.ticker} <span className="text-white/70">{prop.name}</span></p>
                    <div className="flex gap-2 font-bold">
                        <p className="candal text-xl text-white">MC <span className="text-white/70">{prop.mc}</span></p>
                        <p className="candal text-xl flex items-center"><Image src="/images/flower.svg" className="h-4" width={29} height={21} alt="" /><span className="text-white">{prop.mc}</span></p>
                        <p className="candal text-xl flex items-center"><Image src="/images/follower.svg" className="h-4" width={29} height={21} alt="" /><span className="text-white">{prop.followers}</span></p>
                        <p className="candal text-xl flex items-center"><Image src="/images/comment.svg" className="h-4" width={29} height={21} alt="" /><span className="text-white">{prop.comments}</span></p>
                    </div>
                    <section className="flex gap-2 items-center"><p className="text-white/50 inter text-lg">{prop.text}</p><Image src="/images/Group 48096110.svg" className="h-3" width={22} height={18} alt="" /></section>
                    <p className="text-white/50 inter text-lg">Created By@{prop.creator}</p>
                </div>
            </div>

            <div className="w-fit">
            <div className="w-9 h-9 bg-white/50 border-2 border-solid border-white rounded-full"></div>
            <p className="inter text-white/70 text-center mt-4">39%</p>
            </div>
        </Link>
    )
}