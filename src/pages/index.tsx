import Hero from "@/components/hero";
import Layout from "@/components/Layout";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
	return (
		<Layout whiteBeforeScroll={true} white={true}>
			<Hero />
			<BackgroundBeams />
		</Layout>
	)
}
