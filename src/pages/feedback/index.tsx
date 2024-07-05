import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import SectionIntro from '@/components/SectionIntro'
import BentoGridComponent from '@/components/bento-grids/analytics-bento-grid'
import BlurDashboard from '@/components/blur-dashboard'
import Meta from '@/components/Layout/Meta'

export default function Feedback() {
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
				hook="Toolbird Feedback"
				highlighted="single place"
				heading="All of your user feedback in one"
				paragraph="Collect continous user-feedback through a structured system. Build better products based on your users needs."
			/>
			<BlurDashboard image="/showcases/analysis.webp" />
			<SectionIntro
				topMargin={true}
				heading="One system to manage all your feedback"
				description="All you need to collect and manage user feedback in a structured way."
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
