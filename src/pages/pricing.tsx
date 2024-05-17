import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import SectionIntro from '@/components/SectionIntro'
import BentoGridComponent from '@/components/bento-grid'
import CustomerSlider from '@/components/customer-slider'
import PricingTable from '@/components/pricingtable'
import Testimonials from '@/components/testimonials'

export default function Pricing() {
	return (
		<Layout white={true}>
			<PageIntro
				hook="Flexible pricing"
				highlighted=""
				heading="Pricing and plans"
				paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere."
			/>
			<PricingTable />
		</Layout>
	)
}
