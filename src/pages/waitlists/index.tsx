import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import ToolHero from '@/components/toolpage/ToolHero'
import PricingTable from '@/components/pricingtable'
import SectionIntro from '@/components/SectionIntro'
import Features from '@/components/toolpage/Features'
import { ChartBarIcon } from '@heroicons/react/24/outline'
import DashboardDisplay from '@/components/dashboarddisplay'
import BentoGridComponent from '@/components/bento-grids/waitlists-bento-grid'
import BlurSection from '@/components/blur-section'
import BlurDashboard from '@/components/blur-dashboard'

export default function Waitlists() {
	return (
		<Layout white={true}>
			<PageIntro
				buttons={[{text: "Get started", path: "/"}, {text:"Live demo", path: "/"}]}
				hook="Waitlists"
				highlighted="built-in system"
				heading="Collect waitlists signups through our"
				paragraph="Toolbird Waitlists allows you to instantly start, manage and track the waitlist for your next launching feature."
			/>
			<BlurDashboard image='/showcases/waitlists.webp' />
			<SectionIntro bottomMargin={true} heading='One system to to collect and manage signups' description='Our prebuilt waitlist system allows you to start collecting signups in less than a minute through a simple embed code.' hook='Features Included'>
				<BentoGridComponent />
			</SectionIntro>
		</Layout>
	)
}
