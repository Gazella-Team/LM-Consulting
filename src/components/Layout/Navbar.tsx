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
					'h-16 border-b border-gray-600/10 w-full transition-all flex items-center',
					scrolled
						? ' bg-white'
						: props.whiteBeforeScroll ? 'bg-transparent':'bg-white'
				)}
			>
				<div className="w-[95%] paragraph max-w-9xl mx-auto flex items-center justify-between text-gray-800">
					<div className="w-[250px] flex items-center justify-start">
						<h2 className={cn("text-black font-semibold text-xl")}>LM{" "}<span className='font-normal'>Consulting</span></h2>
					</div>
					<div
						className={cn(
							'flex-1 hidden lg:flex items-center justify-center gap-6 font-light text-base'
						)}
					>
						<RefLink
							className="hidden font-normal text-[15px] sm:flex"
							href={'https://app.toolbird.io/auth/login'}
						>
							Services
						</RefLink>
						<RefLink
							className="hidden font-normal text-[15px] sm:flex"
							href={'https://app.toolbird.io/auth/login'}
						>
							Track record
						</RefLink>						
						<RefLink
							className="hidden font-normal text-[15px] sm:flex"
							href={'https://app.toolbird.io/auth/login'}
						>
							Team
						</RefLink>
						<RefLink
							className="hidden font-normal text-[15px] sm:flex"
							href={'https://app.toolbird.io/auth/login'}
						>
							About
						</RefLink>
					</div>
					<div className={cn("w-[250px] items-center justify-end gap-5 font-medium text-black flex")}>
						<RefLink
							className="hidden border px-5 py-1.5 rounded-full border-gray-600/40 font-medium text-sm sm:flex"
							href={'https://app.toolbird.io/auth/login'}
						>
							Get in touch
						</RefLink>
					</div>
				</div>
			</div>
			{menuClicked && (
				<div className="bg-white text-left text-gray-800 flex flex-col justify-between gap-4 font-semibold text-3xl w-[100%] mx-auto py-8 h-[calc(100vh-40px)] lg:hidden">
					<div
						className={cn(
							'flex font-bold flex-col gap-6 w-[86%] mx-auto'
						)}
					>
						<div className="flex flex-col gap-6 border-b border-b-gray-600/10 pb-4">
							<RefLink
								onClick={() => setMenuClicked(false)}
								href="/analytics"
							>
								Web analytics
							</RefLink>
							<RefLink
								onClick={() => setMenuClicked(false)}
								href="/coming-soon"
							>
								Feedback Hub
							</RefLink>
							<RefLink
								onClick={() => setMenuClicked(false)}
								href="/coming-soon"
							>
								User Surveys
							</RefLink>
						</div>
						<RefLink
							onClick={() => setMenuClicked(false)}
							href="/pricing"
						>
							Pricing
						</RefLink>
						<RefLink
							onClick={() => setMenuClicked(false)}
							href="/blog/introducing-toolbird"
						>
							About
						</RefLink>
						<RefLink
							onClick={() => setMenuClicked(false)}
							href="/blog"
						>
							Blog
						</RefLink>
					</div>
					<div className="flex flex-col paragraph gap-2 text-center w-[86%] mx-auto">
						<RefLink
							className="bg-main border-[3px] w-full border-main text-sm font-normal text-white px-6 py-2 rounded-full hover:bg-main hover:text-white transition-all"
							href={'https://app.toolbird.io/auth/login'}
						>
							Log in
						</RefLink>
						<RefLink
							className="bg-gray-800 border-[3px] w-full border-gray-800 text-sm font-normal text-white px-6 py-2 rounded-full "
							href={'https://app.toolbird.io/auth/register'}
						>
							Start 14-day free trial
						</RefLink>
					</div>
				</div>
			)}
		</nav>
	)
}
