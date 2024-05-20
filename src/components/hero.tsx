import Link from 'next/link'
import DashboardDisplay from './dashboarddisplay'
import Features from './features'
import { Reveal } from './Animations/Reveal'
import { RevealLight } from './Animations/RevealLight'
import NiceModal from '@ebay/nice-modal-react'
import JoinWaitlistModal from './modals/JoinWaitlistModal'

export default function Hero() {
	return (
		<section className="py-24 pt-[60px] relative text-center">
			<div className='flex items-center justify-center'>
				<div className="absolute top-[100px] h-[500px] w-[700px] overflow-hidden -z-1" style={{background: "radial-gradient(circle, rgba(94,23,235,0.12552958683473385) 0%, rgba(255,255,255,0) 70%)"}}></div>
			</div>
			<div className="w-[86%] mx-auto max-w-6xl relative flex flex-col gap-5">
				<Reveal delayTime={0}>
					<p className="font-[Caveat] text-main mb-4 text-3xl">
						Proudly built and launched in Europe
					</p>
				</Reveal>
				<Reveal delayTime={0.1}>
					<h1 className="text-4xl md:text-5xl xl:text-6xl max-w-[1300px] mx-auto leading-[110%] font-bold text-gray-800 heading">
						Get Web Analytics, Uptime Monitoring and User Feedback,{" "}
						<span className="bg-gradient-to-r from-main via-violet-700 to-main text-transparent bg-clip-text">
							all in 1 place.
						</span>
					</h1>
				</Reveal>
				<Reveal delayTime={0.2}>
					<p className="text-base md:text-lg mx-auto xl:text-xl font-regular paragraph mb-2 max-w-[800px] w-[85%] text-gray-600">
						Manage web analytics, cron jobs, monitoring, feature
						flags, waitlists, client feedback and more within just
						one platform. Toolbird makes building tech products
						easier
					</p>
				</Reveal>
				<RevealLight delayTime={0.4}>
					<div className="flex items-center paragraph relative justify-center gap-3 mt-4 font-medium">
						<Link
							href={"/"}
							className="bg-main border-[3px] border-main text-white text-sm px-6 py-2 rounded-full"
						>
							Join waitlist
						</Link>
						<Link
							className="border-[3px] bg-gray-800 border-gray-800 text-white text-sm px-6 py-2 rounded-full hover:bg-main hover:border-main hover:text-white transition-all"
							href={''}
						>
							View features
						</Link>
					</div>
				</RevealLight>
			</div>
		</section>
	)
}
