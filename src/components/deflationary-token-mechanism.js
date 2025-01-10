import Image from "next/image"

export default function DTM(props) {
    return (
            <div className="dtm text-left p-4 py-8 bg-gradient-to-b from-light-dark to-[#004EB1] rounded-3xl border-[1px] border-solid border-grid-dark text-white">
                <div className="w-full text-right flex justify-end"><Image src={props.image} width={50} height={50} className="w-auto text-right" alt="" /></div>

                <h3 className="text-lg mt-4 text-white">{props.title}</h3>
                <p className="mt-4 text-white">{props.text}</p>
            </div>
    )
}