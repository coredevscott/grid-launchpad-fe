import Image from "next/image"


export default function WhyChoose (props) {
    return (
        <div className="why-choose flex flex-col w-full bg-[#0B62D025] p-6 md:p-11 gap-4 rounded-3xl text-white">
            <div className="w-full flex justify-between items-center">
                <h3 className="h-fit text-white">{props.title}</h3>
                <Image src={props.image} className="w-8 h-auto" width={58} height={60} alt="" />
            </div>
            <p className="text-white">{props.text}</p>
        </div>
    )
}