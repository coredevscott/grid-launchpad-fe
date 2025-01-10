const { default: Image } = require("next/image");

export default function TrackerCategories (props) {
    return (
        <div className={`flex items-center gap-4 px-4 py-2 border-[1px] border-solid border-white bg-white/10 w-fit rounded-md ${props.active} text-white`}>
            <Image src={props.image} className="w-4" width={22} height={28} alt="" />
            <p className={`text-white text-xl relative top-0.5 text-white/70 pr-4 ${props.active}`}>{props.text}</p>
        </div>
    )
}