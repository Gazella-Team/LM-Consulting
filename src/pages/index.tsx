import About from "@/components/about";
import { Reveal } from "@/components/Animations/Reveal";
import { RevealLight } from "@/components/Animations/RevealLight";
import Hero from "@/components/hero";
import Layout from "@/components/Layout";
import Team from "@/components/team";
import TrackRecord from "@/components/track-record";
import Countup from "@/components/ui/Countup";
import SectionIntro from "@/components/ui/SectionIntro";
import Link from "next/link";

export default function Home() {
    return (
		<Layout>
			<Hero />
			<img alt='hero-image' className="md:h-[500px] lg:h-[800px] max-w-7xl w-[90%] mx-auto object-cover" src="/bgs/abstract01.webp"></img>
			<About />
			<Team />
		</Layout>
    )
}