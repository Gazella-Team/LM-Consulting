import Layout from '@/components/Layout'
import CustomerSlider from '@/components/customer-slider'
import AnalyticsFeatureBox from '@/components/feature-boxes/analytics-feature-box'
import Hero02 from '@/components/hero-02'

export default function Home() {
	return (
		<Layout white={true}>
			<Hero02 />
			<div className="mt-[-130px]">
				<AnalyticsFeatureBox />
			</div>
		</Layout>
	)
}
