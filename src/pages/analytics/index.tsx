import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import SectionIntro from '@/components/SectionIntro'
import BentoGridComponent from '@/components/bento-grids/analytics-bento-grid'
import BlurDashboard from '@/components/blur-dashboard'
import Meta from '@/components/Layout/Meta'

export default function Analytics() {
	return (
		<Layout white={true}>
			<Meta
				title={`Privacy-friendly analysis of all your website data - Toolbird Analytics`}
				description="Toolbird Analytics is a simple privacy-first web analytics tool. Track where your users come from, what device they are using and where in the world they are located. All completely anonymous."
				keywords="Privacy, Analytics, Web, Traffic, Web Analytics"
			/>
			<PageIntro
				buttons={[
					{
						text: 'Start 14-day free trial',
						path: 'https://app.toolbird.io/auth/register',
					},
					{
						text: 'Live demo',
						path: 'https://app.toolbird.io/share/toolbird.io',
						target: '_blank',
					},
				]}
				hook="Toolbird Analytics"
				highlighted="website data"
				heading="Privacy-friendly analysis of all your"
				paragraph="Keep track of all traffic going through your website. Analyze visitors, sources, devices and other essential data points."
			/>
			<BlurDashboard image="/showcases/analysis.webp" />
			<SectionIntro
				topMargin={true}
				heading="Powerful insights"
				description="Track where your visitors come from, what device they are using and where in the world they are located."
				hook="Features Included"
			>
				<BentoGridComponent />
			</SectionIntro>
			{/*
			<SectionIntro
				bottomMargin={true}
				heading="Data for every element"
				description="Our custom event tracking allows you to track engagement and user-behaviour on every component on your website."
				hook="Custom Event Tracking"
			>
				<BentoGridComponent />
			</SectionIntro>
			 */}
		</Layout>
	)
}
