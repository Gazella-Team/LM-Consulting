import { Reveal } from './Animations/Reveal'

export default function DashboardDisplay({src}:{src:string}) {
	return (
		<section className="bg-center bg-cover relative mb-24">
				<img
					className="w-[86%] max-w-6xl mx-auto rounded-3xl shadow-clean shadow-main/10 shadow-gray-600/10 border border-gray-600/10"
					src={src}
				></img>
		</section>
	)
}
