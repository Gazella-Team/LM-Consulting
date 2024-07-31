import About from "@/components/about";
import { Reveal } from "@/components/Animations/Reveal";
import { RevealLight } from "@/components/Animations/RevealLight";
import Hero from "@/components/hero";
import Layout from "@/components/Layout";
import Cta from "@/components/Layout/Cta";
import Team from "@/components/team";
import VSL from "@/components/vsl";
import WhyUs from "@/components/why-us";
import Link from "next/link";
import { Element } from "react-scroll";
import { cn } from "utils/cs";

export default function Home() {
    return (
		<Layout>
			<Hero />
			<Element name="about">
				<About />
			</Element>
			<Element name="team">
				<WhyUs />
			</Element>
			<div className="w-[90%] py-10 md:py-24 mx-auto max-w-3xl">
				<VSL />
			</div>
			<Element name="contact">
				<Cta />
			</Element>
		</Layout>
    )
}