import Image from "next/image"


export default function VirtualsPartners (props) {
    return (
        <section className="virtuals-partners bg-[#1A1B23] flex flex-col gap-4 bg-cover bg-no-repeat p-9 h-full justify-between rounded-xl text-white">
            <h3 className="averia-libre text-xl text-white">{props.title}</h3>
            <p className="mt-4 text-sm text-left text-white">{ props.subtitle}</p>
            <section>
            { props.list.map((entry, i) => {
                return (
                    <section key={i} className="flex gap-2 text-left items-start">
                        <Image src="/images/Group 48096084.svg" className="w-3 mt-1" width={11} height={13} alt="" />

                        <p className="text-sm text-white">{ entry }</p>
                    </section>
                )
            })}
            </section>
            
            <div className="w-full bg-gradient-to-tr from-[#003578] to-[#6FBCFF] rounded-md">
            <div className="w-full p-[1px] bg-gradient-to-bl from-[#ffffff47] via-[#ffffff55] to-[#ffffff39] rounded-[7px]">
                <button className="averia-libre w-full bg-gradient-to-tr from-[#003578] to-[#6FBCFF] p-4 rounded-md text-white">Read More</button>
            </div>
            </div>
        </section>

    )
}