import { cn } from 'utils/cs'

type BlurDashboardProps = {
	image: string
}

export default function BlurDashboard(props: BlurDashboardProps) {
	return (
		<section
			style={{
				background:
					'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)',
			}}
			className={cn(
				'max-w-7xl mx-auto lg:rounded-[100px] pt-10 md:pt-24 backdrop:blur-3xl border-y border-gray-600/10'
			)}
		>
			<div className="w-[86%] mx-auto max-w-6xl">
				<img
					className="w-full rounded-t-3xl border-x border-gray-600/10 border-t"
					src={props.image}
				></img>
			</div>
		</section>
	)
}
