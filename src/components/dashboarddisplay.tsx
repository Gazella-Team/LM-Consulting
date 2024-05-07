import { Reveal } from './Animations/Reveal'

export default function DashboardDisplay() {
	return (
		<section className="bg-center bg-cover py-[100px]">
			<Reveal delayTime={0.5}>
				<img
					className="w-[95%] max-w-[1100px] mx-auto rounded-xl shadow-clean border border-gray-600/10"
					src="/showcases/dash.webp"
				></img>
			</Reveal>
		</section>
	)
}
