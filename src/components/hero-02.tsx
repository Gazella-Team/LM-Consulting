import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import { RevealLight } from './Animations/RevealLight'
import useMediaQuery from '@/hooks/use-media-query'

export default function Hero02() {
	const { device } = useMediaQuery()
	return (
		<Reveal delayTime={0.1}>
			<div>
				<section className="py-24 pt-[60px] min-h-[600px] relative md:bg-[url(/bgs/hero.svg)] bg-center bg-cover">
					{/* Transparent white linear gradient overlay */}
					<div
						style={{
							background:
								'linear-gradient(0deg, rgba(255,255,255,1) 16%, rgba(255,255,255,0.29037552521008403) 47%)',
						}}
						className="absolute inset-0 hidden md:block"
					></div>

					<div className="flex items-center">
						<div
							className="absolute hidden md:block top-[100px] h-[500px] w-[700px] overflow-hidden -z-1"
							style={{
								background:
									'radial-gradient(circle, rgba(94,23,235,0.12552958683473385) 0%, rgba(255,255,255,0) 60%)',
							}}
						></div>
					</div>
					<div className="w-[86%] mx-auto max-w-6xl relative flex flex-col gap-5 z-10">
						<Reveal delayTime={0}>
							<p className="font-[Caveat] text-main mb-4 text-2xl md:text-3xl">
								Proudly built and launched in Europe
							</p>
						</Reveal>
						<Reveal delayTime={0.1}>
							{(!device ||
								device == 'desktop' ||
								device == 'tablet') && (
								<h1 className="text-5xl md:max-w-[600px] font-bold text-gray-800 leading-[1.4]">
									Get{' '}
									<span className="bg-main/10 whitespace-nowrap text-gray-800 px-2 rounded-xl">
										Web Analytics
									</span>
									,{' '}
									<span className="bg-main/10 whitespace-nowrap text-gray-800 px-2 rounded-xl">
										Feedback Hub
									</span>{' '}
									and{' '}
									<span className="bg-main/10 whitespace-nowrap text-gray-800 px-2 rounded-xl ">
										User Surveys
									</span>
									, all collected in 1 place.
								</h1>
							)}
							{device == 'mobile' && (
								<h1 className="text-5xl md:max-w-[600px] font-bold text-gray-800 leading-[1.4]">
									Get{' '}
									<div className="flex flex-wrap gap-2">
										<span className="bg-main/10 whitespace-nowrap text-gray-800 px-2 rounded-xl">
											Web Analytics
										</span>
										<span className="bg-main/10 whitespace-nowrap text-gray-800 px-2 rounded-xl">
											Feedback Hub
										</span>
										<span className="bg-main/10 whitespace-nowrap text-gray-800 px-2 rounded-xl ">
											User Surveys
										</span>
									</div>
									All in 1 place.
								</h1>
							)}
						</Reveal>
						<Reveal delayTime={0.2}>
							<p className="text-base md:text-lg xl:text-xl font-regular paragraph mb-2 md:max-w-[500px] w-[85%] text-gray-600">
								As a SaaS developer you no longer need to
								subscribe to various pricy tool-providers to
								have the essential tools needed to get an
								overview of your project.
							</p>
						</Reveal>
						<RevealLight delayTime={0.4}>
							<div className="flex items-center paragraph relative gap-3 mt-4 font-medium">
								<Link
									href={`https://app.toolbird.io/auth/register`}
									onClick={() =>
										// @ts-ignore
										window.toolbird.track('cta_clicked', {
											position: 'hero',
										})
									}
								>
									<button className="bg-main border-[3px] h-12 font-medium border-main text-base text-white px-8 py-1 rounded-full">
										Get started for free
									</button>
								</Link>
							</div>
						</RevealLight>
					</div>
				</section>
				<div
					style={{
						background:
							'linear-gradient(180deg, rgba(255,255,255,1) 11%, rgba(255,255,255,0) 100%)',
					}}
					className="min-h-[100px]"
				></div>
			</div>
		</Reveal>
	)
}
