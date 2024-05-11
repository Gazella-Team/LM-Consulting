import NiceModal from '@ebay/nice-modal-react'
import { useRouter } from 'next/router'
import JoinWaitlistModal from '../modals/JoinWaitlistModal'
import Flyout from './Flyout'
import { Link, Element } from 'react-scroll'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Reveal } from '../Animations/Reveal'
import RefLink from 'next/link'

export default function Navbar({ white }: { white: boolean }) {
	const [menuClicked, setMenuClicked] = useState(false)
	const router = useRouter()
	const path = router.pathname
	return (
		<>
			<nav className="h-[90px] flex items-center bg-transparent">
				<div className="w-[96%] max-w-7xl mx-auto flex items-center justify-between text-gray-800">
					<div className="w-[250px] flex items-center justify-start">
						<RefLink href={'/'}>
							<img
								className="w-[110px]"
								src="/logos/finallogo.svg"
							></img>
						</RefLink>
					</div>
					<div className="flex-1 hidden md:flex items-center justify-center gap-8 font-semibold text-sm">
						<Link smooth={true} to="products" href={'/'}>
							Products
						</Link>
						<Link smooth={true} to="pricing" href={'/'}>
							Pricing
						</Link>
					</div>
					<div className="w-[250px] items-center justify-end gap-5 font-medium text-gray-800 hidden md:flex">
						<RefLink
							className="hidden font-semibold text-sm sm:flex"
							target="_blank"
							href={'https://app.toolbird.io/auth/login'}
						>
							Log in
						</RefLink>
						<button
							onClick={() => NiceModal.show(JoinWaitlistModal)}
							className="bg-main border-[3px] border-main text-sm font-semibold text-white px-6 py-2 rounded-full"
						>
							Join waitlist
						</button>
					</div>
					<div className="flex md:hidden cursor-pointer">
						{menuClicked ? (
							<X onClick={() => setMenuClicked(false)} />
						) : (
							<Menu onClick={() => setMenuClicked(true)} />
						)}
					</div>
				</div>
			</nav>
			{menuClicked && (
				<Reveal delayTime={0}>
					<div className="bg-white text-left flex flex-col justify-between gap-4 font-semibold text-3xl w-[90%] mx-auto py-8 h-[80vh] md:hidden">
						<div className="flex flex-col gap-6">
							<Link smooth={true} to="products" href={'/'}>
								Products
							</Link>
							<Link smooth={true} to="pricing" href={'/'}>
								Pricing
							</Link>
						</div>
						<div className="flex flex-col gap-4 text-center">
							<RefLink
								className="bg-transparent border-[3px] w-full border-main text-sm font-semibold text-main px-6 py-2 rounded-full hover:bg-main hover:text-white transition-all"
								target="_blank"
								href={'https://app.toolbird.io/auth/login'}
							>
								Log in
							</RefLink>
							<button
								onClick={() =>
									NiceModal.show(JoinWaitlistModal)
								}
								className="bg-main border-[3px] w-full border-main text-sm font-semibold text-white px-6 py-2 rounded-full"
							>
								Join waitlist
							</button>
						</div>
					</div>
				</Reveal>
			)}
		</>
	)
}
