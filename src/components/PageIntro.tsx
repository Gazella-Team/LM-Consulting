import { Reveal } from './Animations/Reveal'
import { RevealLight } from './Animations/RevealLight'

interface PageIntroProps {
	heading: string
	paragraph: string
	highlighted: string
	hook: string
}

export default function PageIntro(props: PageIntroProps) {
	return (
		<section className="py-[100px] pb-[50px]">
			<div className="w-[96%] mx-auto max-w-[1000px] flex flex-col gap-6 text-center">
				<Reveal delayTime={0.1}>
					<p className="font-[Caveat] text-main text-3xl">
						{props.hook}
					</p>
				</Reveal>
				<Reveal delayTime={0.1}>
					<h1 className="text-[40px] md:text-[50px] xl:text-[60px] leading-[110%] font-black text-gray-800 heading">
						{props.heading}{' '}
						{props.highlighted && (
							<span className="text-main heading">
								{props.highlighted}
							</span>
						)}
					</h1>
				</Reveal>
				<Reveal delayTime={0.2}>
					<p className="text-base md:text-lg xl:text-xl font-regular max-w-[800px] mx-auto text-gray-600">
						{props.paragraph}
					</p>
				</Reveal>
			</div>
		</section>
	)
}
