import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import SectionIntro from '@/components/SectionIntro'
import Benefits from '@/components/benefits'
import BentoGridComponent from '@/components/bento-grids/analytics-bento-grid'
import CustomerSlider from '@/components/customer-slider'
import PricingTable from '@/components/pricingtable'
import Testimonials from '@/components/testimonials'
import Users from '@/components/users'

export default function Pricing() {
	return (
		<Layout white={true}>
			<PageIntro
				hook="Flexible pricing"
				highlighted=""
				heading="Pricing and plans"
				paragraph="We offer plans that suit any project. Start for free today, no credit card required."
			/>
			<PricingTable />
		</Layout>
	)
}
