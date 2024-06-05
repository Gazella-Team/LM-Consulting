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
							image: '/showcases/toolbar.webp',
							heading: 'One toolbar for all tools',
							description:
								'Quit having mulitple subscriptions for each tool. Our all-in-one solution allows you to save time and money.',
						}}
					/>
					<BentoGridCard
						Obj={{
							image: '/showcases/team.webp',
							heading: 'Collaborate with your team',
							description:
								'Toolbird allows you to manage tools and workspaces alone and in teams, depending on your needs.',
						}}
					/>
				</div>
				<div className="hidden lg:block">
					<BentoGridLong
						Obj={{
							image: 'showcases/code-snippet.webp',
							heading:
								'No advanced onboardings or setups. Configure every tool within five minutes',
							description:
								'80% of users only use 20% of the features these tools provide, we have collected those 20% for you, and simplified the setup as much as possible.',
						}}
					/>
				</div>
				<div className="lg:hidden">
					<BentoGridCard
						Obj={{
							image: 'showcases/code-snippet.webp',
							heading:
								'No advanced onboardings or setups. Configure every tool within five minutes',
							description:
								'80% of users only use 20% of the features these tools provide, we have collected those 20% for you, and simplified the setup as much as possible.',
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

function BentoGridLong(props: any) {
	return (
		<div className="bg-white border paragraph flex items-center rounded-[25px] border-gray-600/10 shadow-clean">
			<div className="p-10 flex flex-col gap-2 max-w-md">
				<h2 className="font-semibold text-lg text-gray-800">
					{props.Obj.heading}
				</h2>
				<p className="text-gray-600 font-normal text-sm max-w-[400px]">
					{props.Obj.description}
				</p>
			</div>
			<div className="w-full rounded-3xl">
				{props.Obj.image && (
					<div className="relative">
						<img
							className="h-[270px] w-full rounded-3xl object-cover rounded-t-[25px]"
							src={props.Obj.image}
						></img>
						<div
							className="absolute rounded-3xl inset-0 h-full rounded-t-[25px]"
							style={{
								background:
									'linear-gradient(0deg, rgba(255,255,255,0.8225884103641457) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.7441570378151261) 100%)',
							}}
						></div>
					</div>
				)}
			</div>
		</div>
	)
}
