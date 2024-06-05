import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import { RevealLight } from './Animations/RevealLight'

interface PageIntroProps {
	heading: string
	paragraph?: string
	highlighted: string
	hook: string
	buttons?: any
}

export default function PageIntro(props: PageIntroProps) {
	return (
		<section className="py-[50px] pt-[60px]">
			<div className="w-[86%] mx-auto max-w-6xl flex flex-col text-center">
				<Reveal delayTime={0}>
					<p className="font-[Caveat] text-main mb-4 text-3xl">
						{props.hook}
					</p>
				</Reveal>
				<Reveal delayTime={0}>
					<h1 className="text-[40px] md:text-[50px] xl:text-[55px] leading-[110%] max-w-[600px] mx-auto font-extrabold text-gray-800">
						{props.heading}{' '}
						{props.highlighted && (
							<span className="bg-gradient-to-r from-main via-violet-700 to-main text-transparent bg-clip-text">
								{props.highlighted}
							</span>
						)}
					</h1>
				</Reveal>
				{props.paragraph && (
					<Reveal delayTime={0.1}>
						<p className="text-base paragraph md:text-lg mt-4 xl:text-lg font-regular max-w-[350px] mx-auto text-gray-600">
							{props.paragraph}
						</p>
					</Reveal>
				)}
				{props.buttons ? (
					props.buttons.length === 1 ? (
						<RevealLight delayTime={0.4}>
							<div className="flex items-center paragraph relative justify-center gap-3 mt-6 mb-4 font-medium">
								<Link
									target={props.buttons[0].target}
									href={'/'}
									className="bg-main border-[3px] border-main text-white text-xs px-4 py-1 rounded-full"
								>
									{props.buttons[0].text}
								</Link>
							</div>
						</RevealLight>
					) : (
						<RevealLight delayTime={0.4}>
							<div className="flex items-center paragraph relative justify-center gap-3 mt-6 mb-4 font-medium">
								<Link
									target={props.buttons[0].target}
									href={props.buttons[0].path}
									className="bg-main border-[3px] border-main font-normal text-sm text-white px-4 py-1 rounded-full"
								>
									{props.buttons[0].text}
								</Link>
								<Link
									target={props.buttons[1].target}
									className="bg-gray-800 border-[3px] border-gray-800 font-normal text-sm text-white px-4 py-1 rounded-full"
									href={props.buttons[1].path}
								>
									{props.buttons[1].text}
								</Link>
							</div>
						</RevealLight>
					)
				) : null}
			</div>
		</section>
	)
}
