import { Reveal } from "@/components/Animations/Reveal";
import { RevealLight } from "@/components/Animations/RevealLight";
import Hero from "@/components/hero";
import Layout from "@/components/Layout";
import SectionIntro from "@/components/ui/SectionIntro";
import Link from "next/link";

export default function Home() {
    return (
		<Layout>
			<Hero />
			<img className="h-[800px] w-full object-cover" src="/bgs/abstract01.webp"></img>
			<SectionIntro heading="Meet the team">
				<p>hey</p>
			</SectionIntro>
		</Layout>
    )
}