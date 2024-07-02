import NiceModal from '@ebay/nice-modal-react'
import { useRouter } from 'next/router'
import JoinWaitlistModal from '../modals/JoinWaitlistModal'
import { Link } from 'react-scroll'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Reveal } from '../Animations/Reveal'
import RefLink from 'next/link'
import useScroll from '@/hooks/use-scroll'
import { cn } from '../Accordion'
import Flyout from './Flyouts/Flyout'
import localFont from 'next/font/local'
import { RevealLight } from '../Animations/RevealLight'
import Resources from './Flyouts/Resources'

type NavbarProps = {
	whiteBeforeScroll?: boolean
}

export default function Navbar(props:NavbarProps) {
	const [menuClicked, setMenuClicked] = useState(false)
	const router = useRouter()

	const scrolled = useScroll(50)

	return (
		<nav className="top-0 sticky z-50">
			<div className="bg-white border-b border-gray-600/10 hidden text-gray-600 lg:flex items-center justify-center h-10 text-sm paragraph">
				<RefLink
					className="underline"
					href={'https://app.toolbird.io/auth/register'}
				>
					Start your 14-day free trial today 🎉
				</RefLink>
			</div>
			<div
				className={cn(
					'h-[58px] w-full transition-all flex items-center',
					scrolled
						? 'border-b border-gray-600/10 bg-white/50 backdrop-blur-xl'
						: props.whiteBeforeScroll ? 'bg-white':'bg-transparent'
				)}
			>
				<div className="w-[86%] paragraph max-w-6xl mx-auto flex items-center justify-between text-gray-800">
					<div className="w-[250px] flex items-center justify-start">
						<RefLink href={'/'}>
							<img
								className="w-[110px]"
								src="/logos/finallogo.svg"
							/>
						</RefLink>
					</div>
					<div
						className={cn(
							'flex-1 hidden lg:flex items-center justify-center gap-8 font-medium text-sm'
						)}
					>
						<Flyout />
						<RefLink href={'/pricing'}>Pricing</RefLink>
						<RefLink href="/blog/introducing-toolbird">
							About
						</RefLink>
						<Resources />
					</div>
					<div className="w-[250px] items-center justify-end gap-5 font-medium text-gray-800 hidden lg:flex">
						<RefLink
							className="hidden font-medium text-sm sm:flex"
							href={'https://app.toolbird.io/auth/login'}
						>
							Log in
						</RefLink>
						<RefLink
							href={'https://app.toolbird.io/auth/register'}
							className="bg-gray-800 border-[3px] border-gray-800 font-normal text-sm text-white px-4 py-1 rounded-full"
						>
							Start 14-day free trial
						</RefLink>
					</div>
					<div className="flex lg:hidden cursor-pointer">
						{menuClicked ? (
							<X onClick={() => setMenuClicked(false)} />
						) : (
							<Menu onClick={() => setMenuClicked(true)} />
						)}
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
