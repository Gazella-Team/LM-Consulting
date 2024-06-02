import { Reveal } from '../Animations/Reveal'

export default function BentoGridComponent() {
	return (
		<section>
			<div style={{background: "radial-gradient(circle, rgba(103,27,255,0.06908700980392157) 0%, rgba(255,255,255,0) 50%)"}} className="flex flex-col gap-5">
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
					<BentoGridCard
						Obj={{
							image: '/showcases/map.webp',
							heading: 'Track Developement',
							description:
								'Keep track of all traffic going thorugh your website. Analyze visitors, sources, devices and other essential data points',
						}}
					/>
					<BentoGridCard
						Obj={{
							image: '/showcases/chart.webp',
							heading: 'Manage all signups',
							description:
								'Create, manage and run a custom waitlist in a structured dashboard with only two clicks',
						}}
					/>
				</div>
				<div className="">
					<BentoGridLong
						Obj={{
							image: '/showcases/chart.webp',
							heading: 'Set a signup goal',
							description:
								'Share a workspace with your team-members for more productive development',
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
				{props.Obj.image &&
				<div className='relative'>
					<img
						className="h-[270px] w-full object-cover rounded-t-[25px]"
						src={props.Obj.image}
					></img>
  					<div className='absolute inset-0 h-full rounded-t-[25px]' style={{background: "linear-gradient(0deg, rgba(255,255,255,0.8225884103641457) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.7441570378151261) 100%)"}}></div>
				</div>
				}
				<div className="p-10 flex flex-col gap-2">
					<h2 className="font-semibold text-lg text-gray-800">
						{props.Obj.heading}
					</h2>
					<p className="text-gray-600 font-normal text-sm mx-auto max-w-[400px]">{props.Obj.description}</p>
				</div>
			</div>
	)
}

function BentoGridLong(props: any) {
	return (
			<div className="bg-white border paragraph flex items-center rounded-[25px] border-gray-600/10 shadow-clean">
				<div className="p-10 flex flex-col gap-2">
					<h2 className="font-semibold text-lg text-gray-800">
						{props.Obj.heading}
					</h2>
					<p className="text-gray-600 font-normal text-sm mx-auto max-w-[400px]">{props.Obj.description}</p>
				</div>
				{props.Obj.image &&
				<div className='relative flex justify-end w-full'>
					<img
						className="h-[270px] w-full object-cover rounded-t-[25px]"
						src={props.Obj.image}
					></img>
  					<div className='absolute inset-0 h-full rounded-t-[25px]' style={{background: "linear-gradient(0deg, rgba(255,255,255,0.8225884103641457) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.7441570378151261) 100%)"}}></div>
				</div>
				}
			</div>
	)
}
