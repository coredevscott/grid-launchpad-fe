export default function TXData (prop) {

    const percent = (prop.left/prop.total)*100

    return(
        <section className="flex gap-4 text-white">
            <section className="w-fit text-xl">
                <p className="text-white">TXNS</p>
                <p className="text-white font-bold">{prop.total}</p>
            </section>

            <section className="flex justify-between w-full text-lg flex-wrap gap-y-2">
                <section className="w-1/2">
                    <p className="text-white">BUYS</p>
                    <p className="text-white font-bold">{prop.left}</p>
                </section>
                <section className="w-1/2 text-right">
                    <p className="text-white">SELLS</p>
                    <p className="text-white font-bold">{prop.right}</p>
                </section>

                <section className="w-full h-2 rounded-full bg-[#0B62D038]">
                    <div className="h-full bg-[#6FBCFF] rounded-full" style={{width: `${percent}%`}}></div>
                </section>
            </section>
        </section>
    )
}