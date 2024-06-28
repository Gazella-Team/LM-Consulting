import HeroDashboard from '@/components/HeroDashboard'
import Layout from '@/components/Layout'
import CustomerSlider from '@/components/customer-slider'
import AnalyticsFeatureBox from '@/components/feature-boxes/analytics-feature-box'
import Hero from '@/components/hero'
import Hero02 from '@/components/hero-02'
import Mission from '@/components/mission'

export default function Home() {
	return (
		<Layout white={true}>
			<Hero />
			<HeroDashboard />
			<Mission />
			<AnalyticsFeatureBox />
		</Layout>
	)
}
