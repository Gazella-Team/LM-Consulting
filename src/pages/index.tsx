import Layout from '@/components/Layout'
import AnalyticsFeatureBox from '@/components/feature-boxes/analytics-feature-box'
import WorkspaceFeatureBox from '@/components/feature-boxes/workspace-feature-box'
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
