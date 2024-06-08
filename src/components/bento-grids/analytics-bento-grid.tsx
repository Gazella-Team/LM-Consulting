import { Reveal } from '../Animations/Reveal'

export default function BentoGridComponent() {
	return (
		<section>
			<div
				style={{
					background:
						'radial-gradient(circle, rgba(103,27,255,0.06908700980392157) 0%, rgba(255,255,255,0) 50%)',
				}}
				className="flex flex-col gap-5"
			>
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
					<BentoGridCard
						Obj={{
							image: '/showcases/map.webp',
							heading: 'Geographic Data',
							description:
								'Track what countries, regions and cities your visitors visit you from, to get better insights on your audiences locations.',
						}}
					/>
					<BentoGridCard
						Obj={{
							image: '/showcases/chart.webp',
							heading: 'Data visualization',
							description:
								'All data is selectively displayed on a intuitive chart, to ensure as good an overview of your website as possible.',
						}}
					/>
				</div>
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
					<BentoGridCard
						Obj={{
							heading: 'Device Data',
							description:
								'Track what browser, operating system and physical device your visitors use.',
						}}
					/>
					<BentoGridCard
						Obj={{
							heading: 'Refferer Data',
							description:
								'Track exactly where your visitors are referred to your website from.',
						}}
					/>
					<BentoGridCard
						Obj={{
							heading: 'Page Data',
							description:
								'Get to know what pages your visitors visit the most, and how much tine they spend ',
						}}
					/>
				</div>
			</div>
		</section>
	)
}

function BentoGridCard(props: any) {
	return (
		<div className="bg-white border paragraph text-center rounded-[25px] border-gray-600/10 shadow-clean">
			{props.Obj.image && (
				<div className="relative">
					<img
						className="h-[270px] w-full object-cover rounded-t-[25px]"
						src={props.Obj.image}
					></img>
					<div
						className="absolute inset-0 h-full rounded-t-[25px]"
						style={{
							background:
								'linear-gradient(0deg, rgba(255,255,255,0.8225884103641457) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.7441570378151261) 100%)',
						}}
					></div>
				</div>
			)}
			<div className="p-10 flex flex-col gap-2">
				<h2 className="font-semibold text-lg text-gray-800">
					{props.Obj.heading}
				</h2>
				<p className="text-gray-600 font-normal text-sm mx-auto max-w-[400px]">
					{props.Obj.description}
				</p>
			</div>
		</div>
	)
}
