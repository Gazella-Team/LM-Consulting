import Hero from "@/components/hero";
import Layout from "@/components/Layout";

export default function Home() {
	return (
		<Layout whiteBeforeScroll={true} white={true}>
			<Hero />
		</Layout>
	)
}
