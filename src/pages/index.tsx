import About from "@/components/about";
import { Reveal } from "@/components/Animations/Reveal";
import { RevealLight } from "@/components/Animations/RevealLight";
import Hero from "@/components/hero";
import Layout from "@/components/Layout";
import TrackRecord from "@/components/track-record";
import SectionIntro from "@/components/ui/SectionIntro";
import Link from "next/link";

export default function Home() {
    return (
		<Layout>
			<Hero />
			<img className="h-[800px] max-w-8xl w-[90%] mx-auto object-cover" src="/bgs/abstract01.webp"></img>
			<TrackRecord />
			<SectionIntro heading="About us.">
				<About />
			</SectionIntro>
		</Layout>
    )
}