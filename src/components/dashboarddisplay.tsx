import { Reveal } from './Animations/Reveal'

export default function DashboardDisplay({src}:{src:string}) {
	return (
		<section className="bg-center bg-cover relative">
			<Reveal delayTime={0.1}>
				<img
					className="w-[86%] max-w-6xl mx-auto rounded-3xl shadow-lg shadow-gray-600/10 border border-gray-600/10"
					src={src}
				></img>
			</Reveal>
		</section>
	)
}
