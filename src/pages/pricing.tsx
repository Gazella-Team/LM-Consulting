import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import BlurSection from '@/components/blur-section'
import PricingTable from '@/components/pricingtable'
import PricingFAQ from '@/components/FAQ/PricingFAQ'
import Meta from '@/components/Layout/Meta'

export default function Pricing() {
	return (
		<Layout white={true}>
			<Meta title={`Pricing - Toolbird.io`} />
			<PageIntro
				hook="Flexible pricing"
				highlighted=""
				heading="Pricing and plans"
				paragraph="We offer plans that suit any project. Start for free today, no credit card required."
			/>
			<PricingTable />
			{
				<BlurSection
					bottomMargin={true}
					heading="Get all your answers"
					hook="Frequently Asked Questions"
				>
					<PricingFAQ />
				</BlurSection>
			}
		</Layout>
	)
}
