import Link from "next/link";

export default function Footer () {
    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer className="px-6 lg:px-24 text-white">
            <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-12 lg:gap-24">
                <section className="w-full">
                    <Link href="/" className=" text-3xl text-white">Grid</Link>
                    <p className="my-4">Discover the future of finance with our secure and user-friendly platform for buying, selling, and managing cryptocurrencies.</p>
                    <div className="flex gap-4 mt-8">
                        <Link href="#" className="rounded-full px-4 py-1 border-[1px] border-solid border-[#1784E2]">
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.815 5.28913C22.0874 5.1745 22.3855 5.13496 22.6783 5.17464C22.9711 5.21431 23.248 5.33175 23.48 5.51472C23.7121 5.69769 23.8908 5.93951 23.9977 6.21501C24.1045 6.49051 24.1356 6.78962 24.0876 7.0812L21.588 22.2433C21.3455 23.7058 19.7408 24.5445 18.3995 23.816C17.2775 23.2065 15.6111 22.2675 14.1122 21.2877C13.3628 20.7973 11.067 19.2267 11.3492 18.1092C11.5916 17.1536 15.4491 13.5629 17.6534 11.428C18.5186 10.5893 18.124 10.1055 17.1023 10.877C14.5652 12.7925 10.4917 15.7054 9.1449 16.5254C7.9568 17.2484 7.3374 17.3718 6.59677 17.2484C5.24555 17.0236 3.99242 16.6753 2.96964 16.251C1.58757 15.6778 1.6548 13.7778 2.96854 13.2245L21.815 5.28913Z" fill="#1784E2"/>
                            </svg>
                        </Link>
        
                        <Link href="#" className="rounded-full px-4 py-1 border-[1px] border-solid border-[#1784E2]">
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.1207 23.9656L15.8575 11.9216L15.8716 11.9329L23.3221 3.30054H20.8324L14.763 10.3266L9.94321 3.30054H3.4135L11.128 14.5451L11.127 14.5442L2.99072 23.9656H5.48047L12.2282 16.1485L17.591 23.9656H24.1207ZM8.95671 5.17917L20.5505 22.0869H18.5775L6.97434 5.17917H8.95671Z" fill="#1784E2"/>
                            </svg>
                        </Link>
        
                        <Link href="#" className="rounded-full px-4 py-1 border-[1px] border-solid border-[#1784E2]">
                            <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.8815 6.28059C20.4156 5.59726 18.8286 5.1013 17.1754 4.81475C17.1609 4.81428 17.1465 4.817 17.1331 4.82272C17.1198 4.82843 17.1079 4.837 17.0982 4.84781C16.8998 5.21152 16.6684 5.68543 16.5141 6.04914C14.7606 5.78463 12.9773 5.78463 11.2238 6.04914C11.0695 5.67441 10.8381 5.21152 10.6287 4.84781C10.6177 4.82577 10.5846 4.81475 10.5515 4.81475C8.89834 5.1013 7.32229 5.59726 5.84543 6.28059C5.83441 6.28059 5.82339 6.29161 5.81237 6.30263C2.81456 10.7883 1.98796 15.1528 2.39575 19.4731C2.39575 19.4952 2.40677 19.5172 2.42882 19.5282C4.41266 20.9831 6.31935 21.8648 8.204 22.4489C8.23706 22.4599 8.27013 22.4489 8.28115 22.4269C8.722 21.8207 9.11877 21.1814 9.46043 20.5091C9.48248 20.4651 9.46043 20.421 9.41635 20.4099C8.78813 20.1675 8.19298 19.8809 7.60885 19.5503C7.56476 19.5282 7.56476 19.4621 7.59783 19.429C7.71906 19.3409 7.8403 19.2417 7.96153 19.1535C7.98357 19.1315 8.01664 19.1315 8.03868 19.1425C11.83 20.8728 15.9189 20.8728 19.6662 19.1425C19.6882 19.1315 19.7213 19.1315 19.7433 19.1535C19.8646 19.2527 19.9858 19.3409 20.107 19.4401C20.1511 19.4731 20.1511 19.5393 20.096 19.5613C19.5229 19.903 18.9167 20.1785 18.2885 20.421C18.2444 20.432 18.2334 20.4871 18.2444 20.5202C18.5971 21.1925 18.9939 21.8317 19.4237 22.4379C19.4568 22.4489 19.4899 22.4599 19.5229 22.4489C21.4186 21.8648 23.3253 20.9831 25.3091 19.5282C25.3312 19.5172 25.3422 19.4952 25.3422 19.4731C25.8271 14.4805 24.5376 10.1491 21.9256 6.30263C21.9145 6.29161 21.9035 6.28059 21.8815 6.28059ZM10.0335 16.839C8.89834 16.839 7.95051 15.792 7.95051 14.5025C7.95051 13.213 8.8763 12.166 10.0335 12.166C11.2018 12.166 12.1276 13.224 12.1166 14.5025C12.1166 15.792 11.1908 16.839 10.0335 16.839ZM17.7154 16.839C16.5802 16.839 15.6324 15.792 15.6324 14.5025C15.6324 13.213 16.5582 12.166 17.7154 12.166C18.8837 12.166 19.8095 13.224 19.7985 14.5025C19.7985 15.792 18.8837 16.839 17.7154 16.839Z" fill="#1784E2"/>
                            </svg>
                        </Link>
                    </div>
                </section>
        
                <section className="w-full flex flex-col gap-4">
                    <h2 className="audiowide-regular text-lg text-[#1784E2]">Explore</h2>
                    <Link href="/tracker" className="text-white">Agent Tracker</Link>
                    <Link href="/profile" className="text-white">Profile</Link>
                    <Link href="/create-agent" className="text-white">Create Agent</Link>
                    <Link href="/buy-sell" className="text-white">Mission</Link>
                </section>

            <section className="w-full">
                <h2 className="text-lg text-[#1784E2]">Stay Ahead with the Latest Updates!</h2>
                <p className="mt-6 text-white">Subscribe to get the freshest crypto news, insights, and offers delivered straight to your inbox.</p>

                <div className="flex rounded-lg bg-white-5 mt-4 relative">
                    <input type="email" className="w-3/4 px-4 bg-white/5 border-[1px] border-solid border-white/10 py-3 rounded-l-lg" placeholder="Enter your email here" />
                    <button className="w-2/5 rounded-lg bg-gradient-to-bl from-[#A3D4FF] to-[#0B62D0] text-lg font-semibold absolute right-0 inset-y-0 text-white">Subscribe</button>
                </div>
            </section>
            </section>

            <p className="border-t-2 border-solid border-white/60 w-full text-center py-4 mt-4">Copyright © {year} Grid</p>


        </footer>
    )
}