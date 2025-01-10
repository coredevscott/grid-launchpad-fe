import Link from "next/link";
import { useRef } from "react";


export function Header (props) {
    const menu = useRef(null);

    const openMenu = () => {
        menu.current.style.display == 'flex'? menu.current.style.display = 'none': menu.current.style.display = 'flex';
    }

    return (
        <>
        <nav className="flex py-8 items-center justify-between w-full px-6 md:px-20 bg-transparent relative z-50 text-white">
            <div className="">
                <Link href="/"><h1 className="text-3xl">Grid</h1></Link>
            </div>
            <div className="lg:flex text-right gap-16 hidden relative z-50">
                { props.home?<Link href="/tracker" className="text-lg text-grid-blue">Agent Tracker</Link>: <Link href="/tracker" className="text-lg text-white">Agent Tracker</Link> }
                { props.profile?<Link href="/profile" className="text-lg text-grid-blue">Profile</Link>:<Link href="/profile" className="text-lg text-white">Profile</Link> }
                { props.ca?<Link href="/create-agent" className="text-lg text-grid-blue">Create New Agent</Link>:<Link href="/create-agent" className="text-lg text-white">Create New Agent</Link> }
                
                { props.bs?<Link href="/buy-sell" className="text-lg text-grid-blue">Mission</Link>: <Link href="/buy-sell" className="text-lg">Mission</Link>}
            </div>
            <button className="lg:hidden fill-white w-6" onClick={openMenu}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg></button>
        </nav>
        <div ref={menu} className="hidden flex-col w-full px-6 md:px-20 text-right gap-6 bg-white/10 text-white relative z-50">
            { props.home?<Link href="/tracker" className="border-b-2 border-solid border-white text-2xl text-center py-6 text-grid-blue">Agent Tracker</Link>:<Link href="/tracker" className="border-b-2 border-solid border-white text-2xl text-center py-6 text-white">Agent Tracker</Link> }
            { props.profile?<Link href="/profile" className="border-b-2 border-solid border-white text-2xl text-center pb-6 text-grid-blue">Profile</Link>: <Link href="/profile" className="border-b-2 border-solid border-white text-2xl text-center pb-6 text-white">Profile</Link>}
            { props.ca?<Link href="/create-agent" className="border-b-2 border-solid border-white text-2xl text-center pb-6 text-grid-blue">Create New Agent</Link>:<Link href="/create-agent" className="border-b-2 border-solid border-white text-2xl text-center pb-6 text-white">Create New Agent</Link> }
            { props.bs?<Link href="#" className="border-b-2 border-solid border-white text-2xl text-center pb-6 text-grid-blue">Mission</Link>:<Link href="#" className="border-b-2 border-solid border-white text-2xl text-center pb-6 text-white">Mission</Link> }
        </div>
        </>
    )
}