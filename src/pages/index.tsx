import Layout from '@/components/Layout'
import FeatureBox from '@/components/feature-box'
import Hero02 from '@/components/hero-02'

export default function Home() {
	return (
		<Layout white={true}>
			<Hero02 />
			<div className="mt-[-130px]">
				<FeatureBox />
			</div>
		</Layout>
	)
}
