import { Reveal } from "./Animations/Reveal";

export default function About() {
	return (
		<div className="bg-white mt-24 relative shadow-sm rounded-3xl border border-gray-600/10 p-16 text-gray-800 mb-24 max-w-3xl mx-auto">
			<div>
				<Reveal delayTime={0}>
					<div className="flex items-center mb-10">
						<img className="h-20 w-20 rounded-full border-2 border-main" src="/people/lasseosmann.webp"></img>
						<img className="h-20 w-20 rounded-full ml-[-20px] border-2 border-main" src="/people/simonmaribo.webp"></img>
					</div>
				</Reveal>
				<Reveal delayTime={0}>
					<h1 className="text-[40px] heading md:text-[50px] xl:text-[55px] mb-8 leading-[110%] max-w-[600px] font-black text-gray-800">
						Public building tech startup at its{' '}
						<span className="bg-gradient-to-r from-main via-violet-700 to-main text-transparent bg-clip-text">
							finest
						</span>
					</h1>
				</Reveal>
			</div>
			<Reveal delayTime={0}>
				<p className="text-base text-gray-600 paragraph mt-4 leading-[168%]">
					Manage web analytics, cron jobs, monitoring, feature flags,
					waitlists, client feedback and more within just one platform.
					Toolbird makes building tech products easier
					<br></br>
					<br></br>
					Manage web analytics, cron jobs, monitoring, feature flags,
					waitlists, client feedback and more within just one platform.
					Toolbird makes building tech products easier
					<br></br>
					<br></br>
					Manage web analytics, cron jobs, monitoring, feature flags,
					waitlists, client feedback and more within just one platform.
					Toolbird makes building tech products easier
					Manage web analytics, cron jobs, monitoring, feature flags,
					waitlists, client feedback and more within just one platform.
					Toolbird makes building tech products easier
					<br></br>
					<br></br>
					Manage web analytics, cron jobs, monitoring, feature flags,
					waitlists, client feedback and more within just one platform.
					Toolbird makes building tech products easier
					<br></br>
					<br></br>
					Manage web analytics, cron jobs, monitoring, feature flags,
					waitlists, client feedback and more within just one platform.
					Toolbird makes building tech products easier
				</p>
			</Reveal>
		</div>
	)
}
