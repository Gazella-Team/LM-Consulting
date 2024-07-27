import About from "@/components/about";
import Hero from "@/components/hero";
import Layout from "@/components/Layout";
import Cta from "@/components/Layout/Cta";
import Team from "@/components/team";
import { Element } from "react-scroll";

export default function Home() {
    return (
		<Layout>
			<Hero />
			<img alt='hero-image' className="md:h-[500px] lg:h-[800px] max-w-7xl w-[90%] mx-auto object-cover" src="/bgs/abstract01.webp"></img>
			<Element name="about">
				<About />
			</Element>
			<Element name="team">
				<Team />
			</Element>
			<Element name="contact">
				<Cta />
			</Element>
		</Layout>
    )
}