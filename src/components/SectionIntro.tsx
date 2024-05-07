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
		<div className="text-center text-gray-800 mb-14">
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
				<p className="font-[Caveat] text-main text-3xl mb-3">
					{props.hook}
				</p>
			</Reveal>
			<Reveal delayTime={0.1}>
				<h2 className="text-4xl md:text-5xl w-[90%] mx-auto font-black mb-4">
					{props.heading}
				</h2>
			</Reveal>
			<Reveal delayTime={0.2}>
				<p className="text-lg max-w-3xl w-[90%] mx-auto text-gray-600">
					{props.description}
				</p>
			</Reveal>
			<div className="py-24 pt-14 text-left">{props.children}</div>
		</div>
	)
}
