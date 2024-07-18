import Hero from "@/components/hero";
import Layout from "@/components/Layout";
import { BackgroundBeams } from "@/components/ui/background-beams";
import SectionIntro from "@/components/ui/SectionIntro";

export default function Home() {
	return (
		<Layout whiteBeforeScroll={true} white={true}>
			<Hero />
			<BackgroundBeams />
			{/*
			<SectionIntro marginBottom={true} marginTop={true} heading="More value for your money">
				<p>jeu</p>
			</SectionIntro>
			 */}
		</Layout>
	)
}
