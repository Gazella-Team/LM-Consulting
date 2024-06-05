import Link from 'next/link'
import { Reveal } from '../Animations/Reveal'
import { RevealLight } from '../Animations/RevealLight'

type CompareHeroProps = {
	iconPath: string
	company: string
	paragraph: string
}

export default function CompareHero(props: CompareHeroProps) {
	return (
		<section className="py-[50px] pt-[60px] relative">
			<div className="flex items-center justify-center">
				<div
					className="absolute top-[100px] h-[500px] w-[700px] overflow-hidden -z-1"
					style={{
						background:
							'radial-gradient(circle, rgba(94,23,235,0.12552958683473385) 0%, rgba(255,255,255,0) 62%)',
					}}
				></div>
			</div>
			<div className="w-[96%] mx-auto relative max-w-[1000px] flex flex-col text-center">
				<Reveal delayTime={0}>
					<p className="font-[Caveat] text-main mb-4 text-3xl">
						Compare
					</p>
				</Reveal>
				<Reveal delayTime={0.1}>
					<h1 className="text-[40px] heading md:text-[50px] xl:text-[55px] leading-[110%] max-w-[600px] mx-auto font-black text-gray-800">
						Toolbird.io<span> vs </span>
						{props.company}
					</h1>
				</Reveal>
				{props.paragraph && (
					<Reveal delayTime={0.2}>
						<p className="text-base paragraph md:text-lg mt-4 xl:text-lg font-regular max-w-[350px] mx-auto text-gray-600">
							{props.paragraph}
						</p>
					</Reveal>
				)}
				<RevealLight delayTime={0.4}>
					<div className="flex items-center paragraph mb-6 relative justify-center gap-3 mt-8 font-medium">
						<Link
							href={'/'}
							className="bg-main border-[3px] border-main text-white text-sm px-6 py-1 rounded-full"
						>
							Start for free
						</Link>
						<Link
							className="border-[3px] bg-transparent border-gray-800 text-gray-800 text-sm px-6 py-1 rounded-full hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all"
							href={''}
						>
							Migrate from {props.company}
						</Link>
					</div>
				</RevealLight>
			</div>
		</section>
	)
}
