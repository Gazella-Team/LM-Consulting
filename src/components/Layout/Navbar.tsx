import NiceModal from '@ebay/nice-modal-react'
import { useRouter } from 'next/router'
import { Link } from 'react-scroll'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Reveal } from '../Animations/Reveal'
import RefLink from 'next/link'
import localFont from 'next/font/local'
import { RevealLight } from '../Animations/RevealLight'
import useScroll from '@/hooks/use-scroll'
import { cn } from 'utils/cs'

type NavbarProps = {
	whiteBeforeScroll?: boolean
}

export default function Navbar(props:NavbarProps) {
	const [menuClicked, setMenuClicked] = useState(false)
	const router = useRouter()
	const scrolled = useScroll(50)

	return (
		<nav className="top-0 fixed w-full z-50">
			<div
				className={cn(
					'h-22 w-full transition-all flex items-center',
					scrolled && "bg-white"
				)}
			>
				<div className="w-[90%] paragraph max-w-7xl mx-auto flex items-center justify-between text-gray-800">
					<div className="w-[250px] flex items-center justify-start">
						<img alt='logo' className='w-32' src='/logo.svg'></img>
					</div>
					<div
						className={cn(
							'flex-1 text-white hidden lg:flex items-center justify-center gap-6 font-light text-base'
						, scrolled && "text-black")}
					>	
						<Link
							to="about"
							duration={10}
							className="hidden cursor-pointer font-normal text-[15px] sm:flex"
							>
							About
						</Link>					
						<Link
							to="team"
							duration={10}
							className="hidden cursor-pointer font-normal text-[15px] sm:flex"
							>
							Team
						</Link>	
						<Link
							to="contact"
							duration={10}
							className="hidden cursor-pointer font-normal text-[15px] sm:flex"
							>
							Contact
						</Link>	
					</div>
					<div className={cn("w-[250px] items-center justify-end gap-5 font-medium text-black flex")}>
						<RefLink
							className={cn("hidden border text-white hover:bg-black hover:text-white transition-all px-5 py-1.5 rounded-md border-gray-500 font-normal text-sm lg:flex", scrolled && "text-black border-gray-600/40")}
							href="/"
						>
							Contact
						</RefLink>
					</div>
					<div className='block lg:hidden cursor-pointer'>
						{menuClicked ? <X onClick={() => setMenuClicked(!menuClicked)} />:<svg onClick={() => setMenuClicked(!menuClicked)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg>}
					</div>
				</div>
			</div>
			{menuClicked && (
				<div className="bg-white text-left text-gray-800 flex flex-col justify-between gap-4 font-semibold text-3xl w-[100%] mx-auto py-14 h-[calc(100vh-40px)] lg:hidden">
					<div
						className={cn(
							'flex text-5xl times-new-font flex-col gap-6 w-[90%] mx-auto'
						)}
					>
						<Link
							to="about"
							duration={10}
							onClick={() => setMenuClicked(false)}
							className="cursor-pointer"
							>
							About
						</Link>					
						<Link
							onClick={() => setMenuClicked(false)}
							to="team"
							duration={10}
							className="cursor-pointer"
							>
							Team
						</Link>	
						<Link
							onClick={() => setMenuClicked(false)}
							className="cursor-pointer"
							to="contact"
							duration={10}
							>
							Contact
						</Link>	
					</div>
					<div className="flex flex-col paragraph gap-2 text-center w-[86%] mx-auto">
						<RefLink
							className="border text-center items-center hover:text-gray-200 justify-center bg-black text-white transition-all px-5 py-3 rounded-md border-gray-600/40 font-normal text-sm flex"
							href="/"
						>
							Contact
						</RefLink>
					</div>
				</div>
			)}
		</nav>
	)
}
