import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import { RevealLight } from './Animations/RevealLight'

interface PageIntroProps {
	heading: string
	paragraph?: string
	highlighted: string
	hook: string
	buttons?:any,
}

export default function PageIntro(props: PageIntroProps) {
	return (
		<section className="py-[50px] pt-[60px] relative">
			<div className='flex items-center justify-center'>
				<div className="absolute top-[100px] h-[500px] w-[700px] overflow-hidden -z-1" style={{background: "radial-gradient(circle, rgba(94,23,235,0.12552958683473385) 0%, rgba(255,255,255,0) 62%)"}}></div>
			</div>
			<div className="w-[86%] mx-auto max-w-6xl relative flex flex-col text-center">
				<Reveal delayTime={0}>
					<p className="font-[Caveat] text-main mb-4 text-3xl">
						{props.hook}
					</p>
				</Reveal>
				<Reveal delayTime={0}>
					<h1 className="text-[40px] heading md:text-[50px] xl:text-[55px] leading-[110%] max-w-[600px] mx-auto font-black text-gray-800">
						{props.heading}{' '}
						{props.highlighted && (
							<span className="bg-gradient-to-r from-main via-violet-700 to-main text-transparent bg-clip-text">
								{props.highlighted}
							</span>
						)}
					</h1>
				</Reveal>
				{props.paragraph && 				<Reveal delayTime={0.1}>
					<p className="text-base paragraph md:text-lg mt-4 xl:text-lg font-regular max-w-[350px] mx-auto text-gray-600">
						{props.paragraph}
					</p>
				</Reveal>}
				{props.buttons &&
							<RevealLight delayTime={0.4}>
									<div className="flex items-center paragraph relative justify-center gap-3 mt-4 font-medium">
										<Link
											href={"/"}
											className="bg-main border-[3px] border-main text-white text-xs px-4 py-1 rounded-full"
										>
											Join waitlist
										</Link>
										<Link
											className="border-[3px] bg-gray-800 border-gray-800 text-white text-xs px-4 py-1 rounded-full hover:bg-main hover:border-main hover:text-white transition-all"
											href={''}
										>
											View features
										</Link>
									</div>
						</RevealLight>
				}
			</div>
		</section>
	)
}
