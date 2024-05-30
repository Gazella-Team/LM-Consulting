import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import { RevealLight } from './Animations/RevealLight'
import { useEffect } from 'react'
import { annotate } from 'rough-notation'

export default function Hero() {
	return (
		<section className="py-24 pt-[60px] relative text-center">
			<div className="flex items-center justify-center">
				<div
					className="absolute top-[100px] h-[500px] w-[700px] overflow-hidden -z-1"
					style={{
						background:
							'radial-gradient(circle, rgba(94,23,235,0.12552958683473385) 0%, rgba(255,255,255,0) 60%)',
					}}
				></div>
			</div>
			<div className="w-[86%] mx-auto max-w-6xl relative flex flex-col gap-5">
				<Reveal delayTime={0}>
					<p className="font-[Caveat] text-main mb-4 text-2xl md:text-3xl">
						Proudly built and launched in Europe
					</p>
				</Reveal>
				<Reveal delayTime={0.1}>
					<h1 className="text-4xl md:text-5xl xl:text-6xl max-w-[1300px] mx-auto font-bold text-gray-800 xl:leading-[80px]">
						Get <span className='bg-main/10 text-gray-800 p-2 py-1 rounded-xl'>Web Analytics</span>,{' '}
						<span className='bg-main/10 text-gray-800 p-2 py-1 rounded-xl'>Uptime Monitoring</span> and{' '}
						<span className='bg-main/10 text-gray-800 p-2 py-1 rounded-xl'>User Feedback</span>, all in 1 place.
					</h1>
				</Reveal>
				<Reveal delayTime={0.2}>
					<p className="text-base md:text-lg mx-auto xl:text-xl font-regular paragraph mb-2 max-w-[800px] w-[85%] text-gray-600">
						As a SaaS developer you no longer need to subscribe to various pricy tool-providers to have the essential tools needed to get an overview of your project.
					</p>
				</Reveal>
				<RevealLight delayTime={0.4}>
					<div className="flex items-center paragraph relative justify-center gap-3 mt-4 font-medium">
					<Link
											href="/"
											className="bg-main border-[3px] border-main font-normal text-sm text-white px-4 py-1 rounded-full"
										>
											Get started for free
										</Link>
										<Link
											className="bg-gray-800 border-[3px] border-gray-800 font-normal text-sm text-white px-4 py-1 rounded-full"
											href="/"
										>
											View features
										</Link>
					</div>
				</RevealLight>
			</div>
		</section>
	)
}
