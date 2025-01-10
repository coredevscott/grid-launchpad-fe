import Image from "next/image"

export function ReferBanner () {
    return (
        <div className="px-8 relative mb-24 text-white">
            <div className="refer-banner bg-cover bg-no-repeat flex flex-col md:block rounded-[20px] relative w-full border-[1px] border-solid border-[#00FFFF] p-12 gap-12">
                <div className="grid gap-8 md:w-1/2">
                    <h2 className="candal text-3xl text-white">Refer Friend & Earn</h2>
                    <p className="w-4/5 text-white">Invite friends to join Memetropolis and earn rewards!</p>
                    <button className="baloo-bhaijaan-2 text-xl bg-gradient-to-tr from-[#0B62D0] to-[#A3D4FF] px-8 py-3 border-[1px] border-solid border-white rounded-[10px] w-full md:w-fit lg:py-2 font-semibold text-white">Invite Friends</button>
                </div>
        
                <Image src="/images/1 10.png" className="md:absolute h-[120%] w-auto bottom-0 right-0" width={568} height={469} alt="" />
            </div>
        </div>
    )
}