import { cn } from 'utils/cs'
import { Reveal } from './Animations/Reveal'

type SectionIntroProps = {
	hook: string
	heading: string
	description?: string
	children: React.ReactNode
	founders?: boolean
	bottomMargin?: boolean
}

export default function SectionIntro(props: SectionIntroProps) {
	return (
		<div className="text-center w-[86%] mx-auto max-w-6xl text-gray-800 pt-32 z-1">
			{props.founders ? (
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
			) : null}
			<p className="font-[Caveat] text-main text-3xl mb-4">
				{props.hook}
			</p>
			<h1 className="text-[40px] mb-4 md:text-[50px] xl:text-[55px] leading-[110%] max-w-[700px] mx-auto font-extrabold text-gray-800">
				{props.heading}
			</h1>
			{props.description && (
				<p className="text-base md:text-lg xl:text-lg paragraph max-w-[350px] mx-auto text-gray-600">
					{props.description}
				</p>
			)}
			<div
				className={cn('pt-14 text-left', props.bottomMargin && 'mb-24')}
			>
				{props.children}
			</div>
		</div>
	)
}
