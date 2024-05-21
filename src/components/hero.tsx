import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import { RevealLight } from './Animations/RevealLight'
import { useEffect } from 'react'
import { annotate } from 'rough-notation'

export default function Hero() {
	useEffect(() => {
		if (typeof window === 'undefined') return
		const analytics = document.getElementById('analytics')
		if (!analytics) return
		annotate(analytics, {
			type: 'highlight',
			color: '#E2D3FF',
			padding: 3,
			animate: false,
			multiline: true,
		}).show()

		const uptime = document.getElementById('uptime')
		if (!uptime) return
		annotate(uptime, {
			type: 'highlight',
			color: '#DCFCE6',
			padding: 0,
			animate: false,
			multiline: true,
		}).show()

		const feedback = document.getElementById('feedback')
		if (!feedback) return
		annotate(feedback, {
			type: 'highlight',
			color: '#E6B2B1',
			padding: 3,
			animate: false,
			multiline: true,
		}).show()
	}, [])

	return (
		<section className="py-24 pt-[60px] relative text-center">
			<div className="flex items-center justify-center">
				<div
					className="absolute top-[100px] h-[500px] w-[700px] overflow-hidden -z-1"
					style={{
						background:
							'radial-gradient(circle, rgba(94,23,235,0.12552958683473385) 0%, rgba(255,255,255,0) 70%)',
					}}
				></div>
			</div>
			<div className="w-[86%] mx-auto max-w-6xl relative flex flex-col gap-5">
				<Reveal delayTime={0}>
					<p className="font-[Caveat] text-main mb-4 text-2xl md:text-3xl">
						Proudly built and launched in Europe
					</p>
				</Reveal>

				<h1 className="text-4xl md:text-5xl xl:text-6xl max-w-[1300px] mx-auto font-bold text-gray-800 xl:leading-[90px]">
					Get <span id="analytics">Web Analytics</span>,{' '}
					<span id="uptime">Uptime Monitoring</span> and{' '}
					<span id="feedback">User Feedback</span>, all in 1 place.
				</h1>
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
							href={'/'}
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
