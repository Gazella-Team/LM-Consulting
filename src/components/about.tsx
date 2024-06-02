import Link from "next/link";
import { Reveal } from "./Animations/Reveal";

export default function About() {
	return (
		<Reveal delayTime={0}>
			<div className="py-24">
				<div className="bg-white relative shadow-main/30 shadow-clean rounded-3xl border border-gray-600/10 p-16 text-gray-800 max-w-3xl mx-auto">
					<div>
							<div className="flex items-center mb-10">
								<img className="h-20 w-20 rounded-full border-2 border-main" src="/people/lasseosmann.webp"></img>
								<img className="h-20 w-20 rounded-full ml-[-20px] border-2 border-main" src="/people/simonmaribo.webp"></img>
							</div>
							<h1 className="text-[40px] heading md:text-[50px] xl:text-[48px] mb-8 leading-[110%] max-w-[600px] font-black text-gray-800">
								On a mission to make SaaS development{' '}
								<span className="bg-gradient-to-r from-main via-violet-700 to-main text-transparent bg-clip-text">
									easier.
								</span>
							</h1>
					</div>
						<p className="text-base text-gray-600 mb-14 paragraph mt-4 leading-[168%]">
							We&apos;re building Toolbird with a vision of making it easier 
							for SaaS developers and tech startups to build, launch and scale
							new products. 
							<br></br>
							<br></br>
							
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
							<br></br><br></br>
							Visit us on <span className="underline text-main"><Link href={"/"}>Producthunt</Link></span>
						</p>
						<div className="flex items-center justify-end">
							<p className="font-[Caveat] text-2xl text-main">- Lasse and Simon<br></br>Founders of Toolbird</p>
						</div>
				</div>
			</div>
		</Reveal>
	)
}
