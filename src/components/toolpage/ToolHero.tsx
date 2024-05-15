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
		<section className="py-14">
			<div style={{background: "radial-gradient(circle, rgba(247,243,255,1) 0%, rgba(255,255,255,1) 50%)"}} className="w-[86%] pt-24  mx-auto max-w-6xl border p-10 text-center border-gray-600/10 rounded-2xl min-h-[600px]">
				<h2 className="text-5xl font-black text-gray-800">{props.heading}</h2>
			</div>
		</section>
	)
}
