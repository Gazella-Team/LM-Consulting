import Link from "next/link"
import { RevealLight } from "../Animations/RevealLight"
import NiceModal from "@ebay/nice-modal-react"
import JoinWaitlistModal from "../modals/JoinWaitlistModal"
import { Reveal } from "../Animations/Reveal"

type ToolHeroProps = {
	heading: string
	description: string
	image: string
}

export default function ToolHero(props: ToolHeroProps) {
	return (
		<section className="py-14 pb-40 relative">
			<div className="absolute h-[500px] w-[700px] overflow-hidden" style={{background: "radial-gradient(circle, rgba(94,23,235,0.15552958683473385) 0%, rgba(255,255,255,0) 60%)"}}></div>
			<div className="mx-auto grid grid-cols-1 xl:grid-cols-[50%_1fr] gap-40">
				<div className="flex xl:w-[84%] ml-auto flex-col gap-6 justify-center">
					<Reveal delayTime={0}>
						<p className="font-[Caveat] text-main text-3xl">
							Poweful analytics
						</p>
					</Reveal>
					<Reveal delayTime={0.1}>
						<h1 className="text-6xl font-bold text-gray-800 leading-[120%]">{props.heading}</h1>
					</Reveal>
					<Reveal delayTime={0.2}>
						<p className="text-xl font-regular text-gray-600">Observe and analyse your links performance in real-time. From referrer, device, to the local city of the visitor. Observe and analyse your links performance in real-time. </p>
					</Reveal>
					<RevealLight delayTime={0.5}>
					<div className="flex items-center gap-3 mt-6 font-medium">
						<button
							onClick={() => NiceModal.show(JoinWaitlistModal)}
							className="bg-main font-semibold border-[3px] border-main text-white text-sm px-6 py-2 rounded-full"
						>
							Get started
						</button>
						<Link
							className="bg-transparent font-semibold border-[3px] border-main text-main text-sm px-6 py-2 rounded-full hover:bg-main hover:text-white transition-all"
							href={''}
						>
							See how it works
						</Link>
					</div>
				</RevealLight>
				</div>
				<img className="w-full border object-cover border-gray-600/10 rounded-3xl shadow-clean" src="/web-analytics/hero.webp"></img>
			</div>
		</section>
	)
}
