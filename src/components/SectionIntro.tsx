import { Reveal } from './Animations/Reveal'

type SectionIntroProps = {
	hook: string
	heading: string
	description: string
	children: React.ReactNode
	founders?: boolean
}

export default function SectionIntro(props: SectionIntroProps) {
	return (
		<div className="text-center text-gray-800 my-14 pt-14 z-1">
			{props.founders ? (
				<Reveal delayTime={0.1}>
					<div className="flex items-center justify-center mb-8">
						<img
							className="w-20 h-20 object-cover rounded-full border-2 border-main"
							src="/people/lasseosmann.webp"
						></img>
						<img
							className="w-20 h-20 object-cover rounded-full border-2 border-main ml-[-20px]"
							src="https://simonmaribo.dk/simonmaribo.png"
						></img>
					</div>
				</Reveal>
			) : null}
			<Reveal delayTime={0.1}>
				<p className="font-[Caveat] text-main text-3xl mb-4">
					{props.hook}
				</p>
			</Reveal>
			<Reveal delayTime={0.1}>
				<h1 className="text-[40px] mb-4 md:text-[50px] xl:text-[55px] leading-[110%] max-w-[700px] mx-auto font-black text-gray-800">
					{props.heading}
				</h1>
			</Reveal>
			<Reveal delayTime={0.2}>
				<p className="text-base md:text-lg xl:text-lg paragraph max-w-[600px] mx-auto text-gray-600">
					{props.description}
				</p>
			</Reveal>
			<div className="py-24 pt-14 text-left">{props.children}</div>
		</div>
	)
}
