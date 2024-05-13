import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import PricingTable from '@/components/pricingtable'

export default function Pricing() {
	return (
		<Layout white={true}>
			<PageIntro
				hook="Flexible pricing"
				highlighted="everyone"
				heading="Pricing for"
				paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere."
			/>
			<PricingTable />
		</Layout>
	)
}
