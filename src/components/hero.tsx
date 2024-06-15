import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import { RevealLight } from './Animations/RevealLight'
import { useEffect } from 'react'
import { annotate } from 'rough-notation'

export default function Hero() {
	return (
		<section className="py-24 pt-[60px] min-h-[900px] relative text-center">
			<div className="w-[86%] mx-auto max-w-6xl relative flex flex-col gap-5">
				<Reveal delayTime={0}>
					<p className="font-[Caveat] text-main mb-4 text-2xl md:text-3xl">
						Proudly built and launched in Europe
					</p>
				</Reveal>
				<Reveal delayTime={0.1}>
					<h1 className="text-3xl md:text-4xl xl:text-6xl max-w-[1300px] mx-auto font-extrabold text-gray-800 xl:leading-[60px]">
						Get{' '}
						<span className="bg-main/10 text-gray-800 mb-2 md:mb-0 block md:inline-block p-2 py-1 rounded-xl">
							Web Analytics,
						</span>{' '}
						<span className="bg-main/10 text-gray-800 block mb-2 md:mb-0 md:inline-block p-2 py-1 rounded-xl">
							Feedback Hub
						</span>{' '}
						<span className="hidden md:inline-block">and</span>{' '}
						<span className="bg-main/10 text-gray-800 block mb-2 md:mb-0 md:inline-block p-2 py-1 rounded-xl">
							User Surveys,
						</span>{' '}
						all in 1 place.
					</h1>
				</Reveal>
				<Reveal delayTime={0.2}>
					<p className="text-base md:text-lg mx-auto xl:text-xl font-regular paragraph mb-2 max-w-[800px] w-[85%] text-gray-600">
						As a SaaS developer you no longer need to subscribe to
						various pricy tool-providers to have the essential tools
						needed to get an overview of your project.
					</p>
				</Reveal>
				<RevealLight delayTime={0.4}>
					<div className="flex items-center paragraph relative justify-center gap-3 mt-4 font-medium">
						<Link
							href="https://app.toolbird.io/auth/register"
							className="bg-main border-[3px] border-main font-medium text-base text-white px-4 py-2 rounded-full"
						>
Start 14-day free trial
						</Link>
					</div>
				</RevealLight>
			</div>
		</section>
	)
}
