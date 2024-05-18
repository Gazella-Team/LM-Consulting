import { Reveal } from './Animations/Reveal'

export default function DashboardDisplay() {
	return (
		<section className="bg-center bg-cover relative">
			<Reveal delayTime={0.5}>
				<img
					className="w-[86%] max-w-6xl mx-auto rounded-3xl shadow-clean border border-gray-600/10"
					src="/showcases/analysis.webp"
				></img>
			</Reveal>
		</section>
	)
}
